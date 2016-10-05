var userCategories = [
		['&#xe600;','印刷品'],
		['&#xe601;','App UI'],
		['&#xe603;','网页'],
		['&#xe602;','线上图']
	];
var userChecklists = [
	[
		['颜色是否正确？','CMYK'],
		['尺寸是否正确？','请查看需求文件'],
		['DPI 是否正确？','印刷 300+, 写真 150+']
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
$(document).on('click','#checklist li',function(){
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
		checklistHTML = checklistHTML + '<li><div class="top"><div class="checkbox"><i class="iconfont">&#xe604;</i></div><div class="item">' + array[i][0] + '</div><div class="clear"></div></div><div class="bottom">' + array[i][1] + '</div></li>';
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


