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
		[true,'骑马钉 册子页数是否为 4 的倍数？','应该补齐空白页'],
		[false,'文案'],
		[true,'文案 是否有从头到尾阅读一遍？','请认真阅读检查文案错误，找出错别字'],
		[true,'半角空格 是否使用妥当？','中文与西文、数字之间加空格，西文半角标点后加空格'],
		[true,'专有名词 写法是否正确？','iPhone 7 / macOS 等，注意大小写和空格位置'],
		[true,'网址换行 时连字符是否去除？','网址在换行时不能用连字符“-”'],
		[false,'标注'],
		[true,'标注页 是否有附带在文档后？','请在文档最后新建画板进行标注'],
		[true,'成品、文档、出血 三种尺寸是否都有标注？','请切记标注出血尺寸'],	
		[true,'装订折叠方法 是否有标注？','请标注出封面封底'],
		[true,'页数 是否有标注？','请说明成品页数和封面封底P数'],
		[true,'材质 是否有标注？','纸张类型:铜版纸、哑粉纸、书写纸等，纸张重量:157g-350g'],
		[true,'表面工艺是否有标注？','哑膜、光膜'],
		[true,'特殊工艺区域 是否另备画板提取分离？','刀模、UV、烫印都需要单独分离出工艺区域'],
		[false,'源文件存档'],
		[true,'图片嵌入 是否都已完成？','请用“链接”窗口将所有图片内容都嵌入'],
		[true,'文字线条 是否保留没转曲的状态？','源文件请不要转曲'],
		[true,'版本号 是否有更新？','版本号格式 2016-08-29 v1.1'],
		[false,'输出文档'],
		[true,'文字线条 是否转曲？','文字线条都应该拓展转曲'],
		[true,'输出文档命名 是否正确？','内容+版本号'],
		[true,'截图确认 是否从头到尾认真阅读一遍？','请让供应商将收到的文件截图确认'],
	],
	[
		[false,'文档尺寸'],
		[true,'画板尺寸 是否正确？','以 @1x 倍大小来作图，iOS 375×667 Android 320×640'],
		[false,'颜色'],
		[true,'颜色 是否从品牌色板里取用？','请不要自行随意调色'],
		[true,'背景可变的元素 是否能保证背景不同情况下的可视性？','请考虑黑、白、花三种极端情况，可使用 <a href="https://github.com/getflourish/Sketch-Color-Contrast-Analyser">Color Contrast Aynalizer</a> 分析对比度'],
		[false,'字体&排版'],
		[true,'字体字号 是否根据规范选用？','iOS/Android 规范中都有不同的字体设置'],
		[true,'换行 是否有考虑？','有些文本内容可能会出现换行，是否有考虑换行后的行距和位置'],
		[true,'中英混排 是否区分使用中英文字体？','混排时中英文的字体使用应该分别设置'],
		[false,'布局尺寸'],
		[true,'尺寸间距 是否遵循 8pt 规范？','是否按照 4 的倍数处理文字基线，8 的倍数处理间距尺寸'],
		[true,'适配 是否有考虑？','iPhone5 / iPhone 6P / 窗口缩放时的变化是否有做考虑'],	
		[false,'文案'],
		[true,'文案 是否有从头到尾阅读一遍？','请认真阅读检查文案错误，找出错别字'],
		[true,'半角空格 使用是否妥当？','中文与西文、数字之间加空格，西文半角标点后加空格'],
		[true,'专有名词 写法是否正确？','iPhone 7 / macOS / Insta360 等,注意大小写和空格位置'],
		[true,'国际化本地化 问题有没有考虑？','定义最小字体、文本区域最大值、行距、间距，尽量缩短文案'],
		[false,'图标'],
		[true,'图标尖角 是否按照规范导成圆角？','0.33px 圆角'],
		[false,'图片'],
		[true,'版权 是否有注意？','请确认图片已购买或者已获得用户授权'],
		[true,'抠图 是否有抠干净？','注意产品大图的边缘部分是否抠干净'],
		[false,'状态'],
		[true,'组件状态 是否完全？','正常 / 悬停 / 按下 / 禁用 / 激活 / 加载中 / 已访问'],
		[true,'页面状态 是否完全？','缺省态（空态） / 危险态 / 成功态 / 提醒态'],
		[false,'标注'],
		[true,'Notes 是否有在合适的地方添加？','对于适配等自动标注无法说明的东西，是否有加额外的 notes 说明'],
		[true,'插件导出后 是否再次打开逐页检查？','1px 的线条是否能看到标注，关键的位置、距离是否能看到'],	
		[false,'切图'],
		[true,'切图背景 是否为透明？','是否有些忘记勾选掉 “Include in Export”'],
		[true,'切图格式 是否正确？','iOS pdf，Android png，带阴影和模糊的不要用 pdf'],	
		[false,'源文件存档与素材拆解'],
		[true,'SVN 是否更新？','请将所有文件提交到 SVN 上'],			
		[true,'图标素材 是否放入 iconfont 图标库？','iconfont.cn'],
		[true,'插画素材 是否放入 wiki？','请放入 wiki 上 UED 的素材库']
	],
	[
		[false,'布局尺寸'],
		[true,'画板尺寸 是否正确？','请采用 MD 规范中的断点方法：<a href="https://material.google.com/layout/responsive-ui.html">Responsive UI</a> '],
		[true,'尺寸间距 是否遵循 8pt 规范？','是否按照 4 的倍数处理文字基线，8 的倍数处理间距尺寸'],
		[true,'适配 是否有考虑？','iPhone5 / iPhone 6P / 窗口缩放时的变化是否有做考虑'],	
		[false,'颜色'],
		[true,'颜色 是否从品牌色板里取用？','请不要自行随意调色'],
		[true,'背景可变的元素 是否能保证背景不同情况下的可视性？','请考虑黑、白、花三种极端情况，可使用 <a href="https://github.com/getflourish/Sketch-Color-Contrast-Analyser">Color Contrast Aynalizer</a> 分析对比度'],
		[false,'字体&排版'],
		[true,'字体字号 是否根据规范选用？','只有大标题等需要用细字重的才引入思源'],
		[true,'换行 是否有考虑？','有些文本内容可能会出现换行，是否有考虑换行后的行距和位置'],
		[true,'中英混排 是否区分使用中英文字体？','混排时中英文的字体使用应该分别设置'],
		[true,'正文排版 是否有做阅读优化？','请使用 <a href="http://typo.sofi.sh">Typo.css</a>'],
		[false,'文案'],
		[true,'文案 是否有从头到尾阅读一遍？','请认真阅读检查文案错误，找出错别字'],
		[true,'半角空格 使用是否妥当？','中文与西文、数字之间加空格，西文半角标点后加空格'],
		[true,'专有名词 写法是否正确？','iPhone 7 / macOS / Insta360 等,注意大小写和空格位置'],
		[true,'国际化本地化 问题有没有考虑？','定义最小字体、文本区域最大值、行距、间距，尽量缩短文案'],
		[false,'图标'],
		[true,'图标尖角 是否按照规范导成圆角？','0.33px 圆角'],
		[false,'图片'],
		[true,'版权 是否有注意？','请确认图片已购买或者已获得用户授权'],
		[true,'抠图 是否有抠干净？','注意产品大图的边缘部分是否抠干净'],
		[true,'压缩 是否有执行？','请使用 PPduck 对大图进行压缩，保证页面加载速度'],
		[false,'状态'],
		[true,'组件状态 是否完全？','正常 / 悬停 / 按下 / 禁用 / 激活 / 加载中 / 已访问'],
		[true,'页面状态 是否完全？','缺省态（空态） / 危险态 / 成功态 / 提醒态'],
		[false,'标注'],
		[true,'Notes 是否有在合适的地方添加？','对于适配等自动标注无法说明的东西，是否有加额外的 notes 说明'],
		[true,'插件导出后 是否再次打开逐页检查？','1px 的线条是否能看到标注，关键的位置、距离是否能看到'],	
		[false,'切图'],
		[true,'切图背景 是否为透明？','是否有些忘记勾选掉 “Include in Export”'],
		[true,'切图格式 是否正确？','png，@1x & @2x'],	
		[false,'源文件存档与素材拆解'],
		[true,'SVN 是否更新？','请将所有文件提交到 SVN 上'],			
		[true,'图标素材 是否放入 iconfont 图标库？','iconfont.cn'],
		[true,'插画素材 是否放入 wiki？','请放入 wiki 上 UED 的素材库']
	],
	[
		[false,'布局尺寸'],
		[true,'画板尺寸 是否正确？','请注意需求里的文档尺寸是 1x 的还是 2x 的，所有图都请用 1x 来做'],
		[false,'颜色'],
		[true,'颜色 是否从品牌色板里取用？','请不要自行随意调色'],
		[true,'背景可变的元素 是否能保证背景不同情况下的可视性？','请考虑黑、白、花三种极端情况，可使用 <a href="https://github.com/getflourish/Sketch-Color-Contrast-Analyser">Color Contrast Aynalizer</a> 分析对比度'],
		[false,'字体&排版'],
		[true,'字体字号 是否根据规范选用？','思源+Roboto'],
		[true,'中英混排 是否区分使用中英文字体？','混排时中英文的字体使用应该分别设置'],
		[false,'文案'],
		[true,'文案 是否有从头到尾阅读一遍？','请认真阅读检查文案错误，找出错别字'],
		[true,'半角空格 使用是否妥当？','中文与西文、数字之间加空格，西文半角标点后加空格'],
		[true,'专有名词 写法是否正确？','iPhone 7 / macOS / Insta360 等,注意大小写和空格位置'],
		[false,'图片'],
		[true,'版权 是否有注意？','请确认图片已购买或者已获得用户授权'],
		[true,'抠图 是否有抠干净？','注意产品大图的边缘部分是否抠干净'],
		[false,'切图'],
		[true,'切图格式 是否正确？','请注意对照需求文档，查看要求的是 jpg 还是 png'],	
		[true,'切图倍数 是否正确？','请注意理解需求文档，将 1x 画板按照其需求导出相应倍数'],	
		[false,'源文件存档与素材拆解'],
		[true,'SVN 是否更新？','请将所有文件提交到 SVN 上'],			
		[true,'插画素材 是否放入 wiki？','请放入 wiki 上 UED 的素材库']
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


