var userCategories = [
		['&#xe600;','印刷品'],
		['&#xe601;','App UI'],
		['&#xe603;','网页'],
		['&#xe602;','线上图']
	];
var userChecklists = [
	[
		[false,'文档尺寸'],
		[true,'画板尺寸 是否正确？','折页 10cm×21cm / 易拉宝 80cm*200cm / 其它见具体要求'],
		[true,'DPI 设置是否正确？','喷绘 72，易拉宝背胶KT版 150，印刷品 300以上'],
		[true,'出血 是否有设置？','上下左右 3mm，册子外边 3mm'],
		[false,'颜色'],
		[true,'颜色模式 是否正确？',' CMYK'],
		[true,'品牌色板 有没有严格采用？','下载 <a target="_blank" href="http://insta360.com">Insta360 Color Palettes - CMYK</a>'],
		[true,'四色黑 是否设置成了纯 K 黑？','C0，M0，Y0，K0-100'],
		[true,'相同组件的颜色 是否统一？','检查文本、分隔线、图标、背景色颜色是否统一'],
		[false,'排版'],
		[true,'中西文字体 是否分别设置？','中文 思源黑体，西文 Roboto'],	
		[true,'字号 是否足够大？','≥5pt'],	
		[true,'行距段距 是否足舒适？','一般设置1.5倍行距，段间距为一空行高度'],
		[true,'段首缩进 是否设置正确？','中文段首缩进 2×字号，西文不缩进'],
		[true,'标点挤压 是否设置？','ai 里设置避头尾和标点挤压'],
		[false,'图标和线条'],
		[true,'图标视觉大小 是否一致？','图标不应以绝对尺寸来统一大小，而是以视觉效果为主'],
		[true,'线条 粗细颜色是否一致？','请检查图标的统一性'],
		[true,'线条粗细 是否合适？','线条最细 ≥ 0.1pt'],
		[false,'布局和装帧'],
		[true,'页边距 是否统一？','页边距一般≥4cm'],
		[true,'页码 是否从头到尾阅读一遍？','请从头到尾阅读一遍页码'],
		[true,'目录 是否有更新？',' Indesign 里请更新目录'],
		[true,'骑马钉 册子是否有页数是否为 4 的倍数？','应该补齐空白页'],
		[false,'文案'],
		[true,'文案 是否有从头到尾阅读一遍？','请认真阅读检查文案错误，找出错别字'],
		[true,'半角空格 是否使用妥当？','中文与西文、数字之间加空格，西文半角标点后加空格'],
		[true,'专有名词 写法是否正确？','iPhone 7 / macOS 等，注意大小写和空格位置'],
		[false,'标注'],
		[true,'标注页 是否有附带在文档后？','请在文档最后新建画板进行标注'],
		[true,'成品、文档、出血 三种尺寸是否都有标注？','请切记标注出血尺寸'],	
		[true,'装订折叠方法 是否有标注？','请标注出封面封底'],
		[true,'页数 是否有标注？','请说明成品页数和封面封底P数'],
		[true,'纸张要求 是否有标注？','纸张类型:铜版纸、哑粉纸、书写纸等，纸张重量:157g-350g'],
		[true,'表面工艺是否有标注？','哑膜、光膜'],
		[true,'特殊工艺区域 是否另备画板提取分离？','刀模、UV、烫印都需要单独分离出工艺区域'],
		[false,'源文件存档'],
		[true,'图片嵌入 是否都已完成？','请用“链接”窗口将所有图片内容都嵌入'],
		[true,'文字线条 是否保留没转曲的状态？','源文件请不要转曲'],
		[true,'版本号 是否有更新？','版本号格式 2016-08-29 v1.1'],
		[false,'输出文档'],
		[true,'文字线条 是否转曲？','文字线条都应该拓展转曲'],
		[true,'输出文档命名 是否正确？','内容+版本号']
	],
	[
		['距离是否正确？','4的倍数'],
		['尺寸是否正确？','请查看需求文件'],
		['DPI 是否正确？','印刷 300+, 写真 150+']
	],
	[
		['切图尺寸是否正确？','CMYK'],
		['尺寸是否正确？','请查看需求文件'],
		['DPI 是否正确？','印刷 300+, 写真 150+'],
		['DPI 是否正确？','印刷 300+, 写真 150+']
	],
	[
		['banner？','CMYK'],
		['尺寸是否正确？','请查看需求文件'],
		['DPI 是否正确？','印刷 300+, 写真 150+']
	]
];

var ismoving = false;

$(document).ready(function() {

	$('#header').animate({'opacity': 1},250);
	setTimeout(function(){
		var $categories = $('#categories');
		var categoryWidth =  100 / userCategories.length;
		$categories.append(insertCategories(userCategories)).find('li,.active-line').css({'width':categoryWidth +'%'});
		$categories.animate({'opacity': 1},250);
	},100);
	setTimeout(function(){
		var $checklist = $('#checklist');
		$checklist.append(insertChecklist(userChecklists[0])).animate({'opacity': 1},250);
	},200);
});
$(document).on('click','#categories li',function(){
	var $this = $(this);
	if(ismoving !== true && !!!$this.hasClass('active')){
		ismoving = true;
		var $n = $this.index() - 1;
		$left = $this.position().left;
		$('#categories .active-line').animate({'left': $left}, 150);
		$('#categories li').removeClass('active');
		$this.addClass('active');
		setTimeout(function(){
			ismoving = false;
		},180);
		setTimeout(function(){
			var $checklist = $('#checklist');
			$checklist.fadeOut('75', function() {
				$checklist.children().remove();
				$checklist.append(insertChecklist(userChecklists[$n])).fadeIn('75');
			});
		},0);
	}
});
$(document).on('click','#checklist li.normal',function(){
	if(ismoving !== true){
		$this = $(this);
		$this.toggleClass('checked');
		setTimeout(function(){
			ismoving = false;
		},250);
	}
});
function insertChecklist(array){
	var checklistHTML = "";
	for (var i = 0; i < array.length; i++) {
		if (array[i][0] === true ){
			var newItem = '<li class="normal"><div class="top"><div class="checkbox"><i class="iconfont">&#xe604;</i></div><div class="item">' + array[i][1] + '</div><div class="clear"></div></div><div class="bottom">' + array[i][2] + '</div></li>';
		}else{
			var newItem = '<li class="separator">' + array[i][1] + '</li>'
		}
		checklistHTML = checklistHTML + newItem;
	}
	return checklistHTML;
}
function insertCategories(array){
	var categoriesHTML = "";
	for (var i = 0; i < array.length; i++) {
		categoriesHTML = categoriesHTML + '<li><i class="iconfont">' + array[i][0] + '</i>' + array[i][1] + '</li>';
	}
	return categoriesHTML;
}


