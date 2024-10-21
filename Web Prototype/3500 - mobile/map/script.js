var restaurantMarkers = [];  // 用于存储所有餐厅的标记
var attractionMarkers = [];  // 用于存储所有景点的标记
var isShowingRestaurants = false;  // 标记是否显示餐厅标记
var isShowingAttractions = false;  // 标记是否显示景点标记

function initMap() {
    console.log("initMap called");  // 检查 initMap 是否被调用

    var uqLat = -27.4975;
    var uqLng = 153.0137;

    // 创建地图对象并设置控件位置
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: uqLat, lng: uqLng },
        zoom: 15,
        mapTypeControl: false,  // 禁用地图类型控件
        streetViewControl: false,  // 禁用街景控件
        fullscreenControl: false  // 禁用全屏控件
    });

    var service = new google.maps.places.PlacesService(map);

    // 搜索餐厅
    var restaurantRequest = {
        location: { lat: uqLat, lng: uqLng },
        radius: '1000',  // 搜索半径为1000米
        type: ['restaurant']  // 搜索附近的餐厅
    };

    // 搜索景点
    var attractionRequest = {
        location: { lat: uqLat, lng: uqLng },
        radius: '1000',  // 搜索半径为1000米
        type: ['tourist_attraction']  // 搜索附近的景点
    };

    // 查找附近的餐厅
    service.nearbySearch(restaurantRequest, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                console.log("Restaurant found: ", results[i].name);  // 输出每个找到的餐厅名称
                var marker = createMarker(results[i], 'red');
                restaurantMarkers.push(marker);  // 保存标记
            }
        } else {
            console.error("Places API request failed: " + status);
        }
    });

    // 查找附近的景点
    service.nearbySearch(attractionRequest, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                console.log("Attraction found: ", results[i].name);  // 输出每个找到的景点名称
                var marker = createMarker(results[i], 'blue');
                attractionMarkers.push(marker);  // 保存标记
            }
        } else {
            console.error("Places API request failed: " + status);
        }
    });

    // 创建标记的函数，传递标记类型颜色
    function createMarker(place, color) {
        var iconColor = color === 'red'
            ? 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'  // 红色餐厅图标
            : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';  // 蓝色景点图标

        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            icon: iconColor,
            visible: false  // 初始状态下标记不可见
        });

        // 当用户点击标记时，弹出信息窗口或跳转到页面
        google.maps.event.addListener(marker, 'click', function() {
            if (color === 'red') {
                // 如果是餐厅标记，跳转到推荐页面
                window.location.href = './recommend/recommend.html';  // 这里指向 recommend 文件夹中的 recommend.html
            } else {
                // 如果是景点标记，显示信息窗口
                var infoWindow = new google.maps.InfoWindow({
                    content: `<strong>${place.name}</strong><br>${place.vicinity}`
                });
                infoWindow.open(map, marker);
            }
        });

        return marker;
    }

    // 餐厅筛选按钮的点击事件：切换显示和隐藏标记
    document.querySelector('.filter-btn:first-child').addEventListener('click', () => {
        isShowingRestaurants = !isShowingRestaurants;  // 切换餐厅显示状态
        console.log(isShowingRestaurants ? "Show restaurant markers" : "Hide restaurant markers");
        restaurantMarkers.forEach(marker => marker.setVisible(isShowingRestaurants));  // 根据状态显示或隐藏餐厅标记
    });

    // 景点筛选按钮的点击事件：切换显示和隐藏标记
    document.querySelector('.filter-btn:last-child').addEventListener('click', () => {
        isShowingAttractions = !isShowingAttractions;  // 切换景点显示状态
        console.log(isShowingAttractions ? "Show attraction markers" : "Hide attraction markers");
        attractionMarkers.forEach(marker => marker.setVisible(isShowingAttractions));  // 根据状态显示或隐藏景点标记
    });
}
