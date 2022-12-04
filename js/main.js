// create the html for line chart
let traffic_H_Labels = ['1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM'];
let traffic_H_Data = [250, 445, 100, 535, 280, 320, 401, 372, 555, 362, 190, 125]
let traffic_D_Labels = ['4 Aug', '5 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug', '10 Aug', '11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug'];
let traffic_D_Data = [3000, 2370, 2700, 3280, 2800, 3000, 2500, 2200, 2800, 2500, 2900, 3300];
let traffic_W_Labels = ['week 40', 'week 41', 'week 42', 'week 43', 'week 44', 'week 45', 'week 46', 'week 47', 'week 48', 'week 49', 'week 50', 'week 51'];
let traffic_W_Data = [750, 1200, 1000, 2000, 1500, 1750, 1250, 1900, 2200, 1500, 2500, 1800];
let traffic_M_Labels = ['January 2021', 'February 2021', 'March 2021', 'April 2021', 'May 2021', 'June 2021', 'July 2010', 'August 2021', 'September 2021', 'October 2021', 'November 2021', 'December 2021'];
let traffic_M_Data = [205050, 440445, 137060, 350435, 127800, 390200, 450001, 340702, 225055, 143062, 519800, 349025];

var myChartLine = echarts.init(document.getElementById('line'));

function drawLineChar(myLabels, myData) {
    var optionLine = {
        tooltip: { /* 提示框，提示数字 */
            trigger: 'axis',
            axisPointer: {
              type: 'line',
              label: {
                backgroundColor: '#6a7985'
              }
            }
        },
        grid: {
            left: '30px',
            bottom: '10px',
            right: '30px',
            top: '30px',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false, /* x轴数据对准分割点 */
            data: myLabels,
            splitLine: {
                show: true
            },
            axisLabel: {
                interval: 0,
                rotate: 45
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                type: 'line',
                data: myData,
                lineStyle: {
                    color: '#7477bf', /* 线的颜色 */
                  },
                areaStyle: {
                    color: 'rgb(116, 119, 191, .2)'
                },  /* 填充面积 */
                smooth: true
            }
        ]
    };
    myChartLine.setOption(optionLine);
}

drawLineChar(traffic_H_Labels, traffic_H_Data);

let traffic_select = document.getElementsByClassName('traffic-nav-link');
let active_select = document.querySelector('.active');
for ( btn of traffic_select ) {
    btn.addEventListener('click', e => {
        if ( e.target !== active_select ) {
            active_select.className = "traffic-nav-link";
            active_select = e.target;
            e.target.className += " active"

            myChartLine.clear();
            switch ( e.target.textContent ) {
                case 'Hourly': 
                    drawLineChar(traffic_H_Labels, traffic_H_Data);
                    break;
                case 'Daily':
                    drawLineChar(traffic_D_Labels, traffic_D_Data);
                    break;
                case 'Weekly':
                    drawLineChar(traffic_W_Labels, traffic_W_Data);
                    break;
                default:
                    drawLineChar(traffic_M_Labels, traffic_M_Data);
                    break;
            }
        }
    });
}


//create the html for bar chart
// 基于准备好的dom，初始化echarts实例
var myChartBar = echarts.init(document.getElementById('bar'));
  
// 指定图表的配置项和数据
var optionBar = {
    color: ["#7477BF"],
    tooltip: { /* 提示框，提示数字 */
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
            backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        bottom: '10px',
        containLabel: true
    },
    xAxis: {
        type: "category",
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        splitLine: {
            show: true
        }
    },
    yAxis: {
        type: "value"
    },
    series: [
        {
            type: 'bar',
            name: 'daily traffic',
            data: [75, 115, 175, 125, 225, 200, 100]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChartBar.setOption(optionBar);


//create the html for doughnut chart
/* pie,dughnut */
var myChartPie = echarts.init(document.getElementById('pie'));
var optionPie = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '10px',
        orient: 'vertical',
        left: 'left'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        bottom: '-5%',
        top: '-5%',
        data: [
          {
            value: 1000,
            name: 'Desktop'
          },
          {
            value: 700,
            name: 'Tablet'
          },
          {
            value: 1300,
            name: 'Phones'
          }
        ]
        
      }
    ]
};

myChartPie.setOption(optionPie);

window.onresize = function () {
    myChartLine.resize();
    myChartBar.resize();
    myChartPie.resize();
}


// create the html for alert banner
const alertBanner = document.getElementById('alert');
alertBanner.innerHTML = 
    `<div class="alert-banner">
        <p><strong>Alert:</string> You have <strong>3</strong> overdue tasks to complete</p>
        <p class="alert-close-btn">x</p>
    </div>`;

// control the display of alert banner
alertBanner.addEventListener('click', e => {
    if(e.target.classList.contains("alert-close-btn")){
        alertBanner.style.display = "none";
    }
});


//Messaging
const user = document.getElementById('message-user');
const message = document.getElementById('message-content');
const btnSend = document.getElementById('btn-send');

btnSend.addEventListener('click', () => {
    if (user.value === '' && message.value === '') {
        alert('Please enter user and message before sending');
        // console.log('aaa');
    } else if (user.value === '') {
        alert('Please enter user before sending');
        // console.log('bbb');
    } else if (message.value === '') {
        alert('Please enter message before sending'); 
        // console.log('ccc');
    } else {
        alert(`Message successfully sent to: ${user.value}`);
        // console.log('ddd');
    }
});