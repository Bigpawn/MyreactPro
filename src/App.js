import React, { Component } from 'react';
import $ from 'n-zepto';
import './App.css';
import tou from '../public/logo.ico'



class App extends Component {
	componentDidMount(){
		$(".AppTapContentInner").css({"transform":"translateY(100px)","transition":"2s","opacity":0})
		$(".AppTapContentInner").eq(0).css({"transform":"translateY(0px)","transition":"2s","opacity":1})
		$(".App").css({"height": "600px"})
		$(".App-nav li").click(function(){
			var index = $(this).index();
			$(".App-nav li").attr("class","")
			$(this).attr("class","active")
			$(".AppTapContentInner").eq(index).siblings().css({"transform":"translateY(100px)","transition":"2s","opacity":0})
			setTimeout(function(){
				$(".AppTapContentInner").eq(index).css({"transform":"translateY(0px)","transition":"2s","opacity":1})
				var height = $(".AppTapContentInner").eq(index).height() + 50
				$(".App").css({"height": height + "px"})
			},1000)
		})
		
		var canvas = document.getElementById("one");
		var ctx1 = canvas.getContext("2d")
		ctx1.beginPath()
		ctx1.strokeStyle = "#000"
		ctx1.lineWidth = "10"
		ctx1.arc(122,95,90,0,2*Math.PI)
		ctx1.stroke()
		ctx1.closePath()
		ctx1.beginPath()
		ctx1.strokeStyle = "green"
		ctx1.lineWidth = "10"
		ctx1.arc(122,95,90,1.5*Math.PI,1.3*Math.PI)
		ctx1.stroke()
		ctx1.closePath()
		
		
		var canvas = document.getElementById("two");
		var ctx2 = canvas.getContext("2d")
		ctx2.beginPath()
		ctx2.strokeStyle = "#000"
		ctx2.lineWidth = "10"
		ctx2.arc(122,95,90,0,2*Math.PI)
		ctx2.stroke()
		ctx2.closePath()
		ctx2.beginPath()
		ctx2.strokeStyle = "green"
		ctx2.lineWidth = "10"
		ctx2.arc(122,95,90,1.5*Math.PI,1.3*Math.PI)
		ctx2.stroke()
		ctx2.closePath()
		
		var canvas = document.getElementById("three");
		var ctx3 = canvas.getContext("2d")
		ctx3.beginPath()
		ctx3.strokeStyle = "#000"
		ctx3.lineWidth = "10"
		ctx3.arc(122,95,90,0,2*Math.PI)
		ctx3.stroke()
		ctx3.closePath()
		ctx3.beginPath()
		ctx3.strokeStyle = "green"
		ctx3.lineWidth = "10"
		ctx3.arc(122,95,90,1.5*Math.PI,1.2*Math.PI)
		ctx3.stroke()
		ctx3.closePath()
		
		var canvas = document.getElementById("four");
		var ctx4 = canvas.getContext("2d")
		ctx4.beginPath()
		ctx4.strokeStyle = "#000"
		ctx4.lineWidth = "10"
		ctx4.arc(122,95,90,0,2*Math.PI)
		ctx4.stroke()
		ctx4.closePath()
		ctx4.beginPath()
		ctx4.strokeStyle = "green"
		ctx4.lineWidth = "10"
		ctx4.arc(122,95,90,1.5*Math.PI,1.3*Math.PI)
		ctx4.stroke()
		ctx4.closePath()
		
		var canvas = document.getElementById("five");
		var ctx5 = canvas.getContext("2d")
		ctx5.beginPath()
		ctx5.strokeStyle = "#000"
		ctx5.lineWidth = "10"
		ctx5.arc(122,95,90,0,2*Math.PI)
		ctx5.stroke()
		ctx5.closePath()
		ctx5.beginPath()
		ctx5.strokeStyle = "green"
		ctx5.lineWidth = "10"
		ctx5.arc(122,95,90,1.5*Math.PI,1.2*Math.PI)
		ctx5.stroke()
		ctx5.closePath()
		
		
		var canvas = document.getElementById("six");
		var ctx6 = canvas.getContext("2d")
		ctx6.beginPath()
		ctx6.strokeStyle = "#000"
		ctx6.lineWidth = "10"
		ctx6.arc(122,95,90,0,2*Math.PI)
		ctx6.stroke()
		ctx6.closePath()
		ctx6.beginPath()
		ctx6.strokeStyle = "green"
		ctx6.lineWidth = "10"
		ctx6.arc(122,95,90,1.5*Math.PI,1.4*Math.PI)
		ctx6.stroke()
		ctx6.closePath()
		
		
		
		
		
		var w = document.getElementById("c").width = window.innerWidth
	,	h = document.getElementById("c").height = window.innerHeight
	, ctx = document.getElementById("c").getContext( '2d' )
	,	particles = []
	,	dirs = [
		{ x: Math.cos( Math.PI * 2 / 6 ), y: Math.sin( Math.PI * 2 / 6 ) },
		{ x: Math.cos( Math.PI * 2 / 6 * 2 ), y: Math.sin( Math.PI * 2 / 6 * 2 ) },
		{ x: Math.cos( Math.PI * 2 / 6 * 3 ), y: Math.sin( Math.PI * 2 / 6 * 3 ) },
		{ x: Math.cos( Math.PI * 2 / 6 * 4 ), y: Math.sin( Math.PI * 2 / 6 * 4 ) },
		{ x: Math.cos( Math.PI * 2 / 6 * 5 ), y: Math.sin( Math.PI * 2 / 6 * 5 ) },
		{ x: Math.cos( Math.PI * 2 / 6 * 6 ), y: Math.sin( Math.PI * 2 / 6 * 6 ) },
	],
	len = 20;

var tick = 0;
function anim(){
	
	window.requestAnimationFrame( anim );
	
	tick += .1;
	
	ctx.shadowBlur = 0;
	ctx.globalCompositeOperation = 'source-over';
	ctx.fillStyle = 'rgba(0,0,0,.04)';
	ctx.fillRect( 0, 0, w, h );
	
	ctx.shadowBlur = 3;
	ctx.globalCompositeOperation = 'lighter';
	
	if( particles.length < 100 && Math.random() < .5 )
		particles.push({
			tick: tick,
			sx: w/2,
			sy: h/2,
			x: 0,
			y: 0,
			dir: ( Math.random() * 3 |0 ) * 2,
			askDir: false,
			time: 0
		});
	
	particles.map(function( particle ){
		if( particle.askDir ){
			particle.dir = Math.random() < .5 ?
				( particle.dir + 1 ) % 6 :
				( particle.dir + 5 ) % 6;
			particle.askDir = false;
		}
		
		++particle.time;
		
		var dir = dirs[particle.dir];
		particle.x += dir.x * 1.5;
		particle.y += dir.y * 1.5;
		
		if( particle.x*particle.x + particle.y*particle.y >= len*len ){
			particle.sx += dir.x * len;
			particle.sy += dir.y * len;
			
			particle.x = particle.y = 0;
			particle.askDir = true;
			
			if( Math.random() < .05 ){
				particle.sx = w/2;
				particle.sy = h/2;
				particle.dir = ( Math.random() * 3 |0 ) * 2;
				particle.askDir = false;
				particle.tick = tick;
			}
		}
		
		var color = 'hsla(hue,80%,50%,.8)'.replace( 'hue', particle.tick );
		ctx.shadowColor = ctx.fillStyle = color;
		var x = particle.sx + particle.x
			,	y = particle.sy + particle.y
		ctx.fillRect( x, y, 2.5, 2.5 );
		
		for( var i = .5; i < Math.random(); i += .1 ){
			ctx.fillRect( x + ( Math.random() -.5 ) * 20, y + ( Math.random() - .5 ) * 20, 1.5, 1.5 );
		}
	})
}

ctx.fillStyle = '#111';
ctx.fillRect( 0, 0, w, h );
anim();

window.addEventListener( 'resize', function(){
	w = document.getElementById("c").width = window.innerWidth;
	h = document.getElementById("c").height = window.innerHeight;
	particles.length = 0;
	ctx.fillStyle = '#111';
	ctx.fillRect( 0, 0, w, h );
})
	}
  render() {
    return (
    	<div className="App">
    		<canvas id="c"></canvas>
    		<div className="App-Content">
		    	<ul className="App-nav">
		    		<li className="active">
		    			<a href="#">
		    				<span className="appNavText">个人简介</span>
		    			</a>
		    		</li>
		    		<li>
		    			<a href="#">
		    				<span className="appNavText">职业生涯</span>
		    			</a>
		    		</li>
		    		<li>
		    			<a href="#">
		    				<span className="appNavText">职业技能</span>
		    			</a>
		    		</li>
		    		<li>
		    			<a href="#">
		    				<span className="appNavText">联系我</span>
		    			</a>
		    		</li>
		    	</ul>
		    	<div className="AppTapContent">
		    		<div className="AppTapContentInner">
		    				<div className="TapImg">
		    					<img src={tou} />
		    				</div>
		    				<h2>Bigpawn</h2>
		    				<p>尚帅兵/1992年9月/天蝎座/周口<br />
		    					爱好:旅游 电影 乒乓球<br />
		    					梦想:行走在世界各地,在未来有一个自己的餐馆(40岁以后),拥有一款属于自己并被世界认可的框架
		    				</p>
		    				<div className="AppTapText">
		    					<div className="mouth">3</div>
		    					<div className="AppTapTextP">
		    						<h3>年左右的web工作经验</h3>
		    						<p>多年的摸爬滚打让我对前端的认知更深,从开始的怕遇到BUG到现在的怕不遇到Bug</p>
		    					</div>
		    				</div>
		    		</div>
		    		<div className="AppTapContentInner zhiye">
		    				<h4>河南云郎网络科技有限公司</h4>
		    				<p>在云郎公司中主要负责前端开发工作,以JavaScript逻辑为主.</p>
		    				<p>最近开发了一个混合式App,主要是运用vue进行搭建</p>
		    				<h4>河南北风科技有限公司</h4>
		    				<p>担任前端工程师,主要负责首页  个人主页  登录页的前端开发工作</p>
		    		</div>
		    		<div className="AppTapContentInner jineng">
		    			<h3>以下是我职业技能的展示</h3>
		    			<div className="chart1">
		    				<span>HTML5 95%</span>
		    				<canvas id="one" width="245px" height="190px"></canvas>
		    			</div>
		    			<div className="chart1">
		    				<span>CSS3 95%</span>
		    				<canvas id="two" width="245px" height="190px"></canvas>
		    			</div>
		    			<div className="chart1">
		    				<span>Vue 80%</span>
		    				<canvas id="three" width="245px" height="190px"></canvas>
		    			</div>
		    			<div className="chart1">
		    				<span>Jquery 95%</span>
		    				<canvas id="four" width="245px" height="190px"></canvas>
		    			</div>
		    			<div className="chart1">
		    				<span>react 90%</span>
		    				<canvas id="five" width="245px" height="190px"></canvas>
		    			</div>
		    			<div className="chart1">
		    				<span>JavaScript 96%</span>
		    				<canvas id="six" width="245px" height="190px"></canvas>
		    			</div>
		    		</div>
		    		<div className="AppTapContentInner tell">
		    			<h3>如果您想要了解我更多,那就请按照下面的方式联系我</h3>
		    			<p>
		    				<span>电话:</span>
		    				<span>15518420288</span>
		    			</p>
		    			<p>
		    				<span>邮箱:</span>
		    				<span>bigpawnshang@163.com</span>
		    			</p>
		    		</div>
		    	</div>
	    	</div>
			</div>
    )
  }
}

export default App;
