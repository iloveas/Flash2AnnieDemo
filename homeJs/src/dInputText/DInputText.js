var dInputText = dInputText || {};
dInputText.DInputText = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();

    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage, false);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener('onMouseDown', hideTipLayerHandler, false);

        s.changeText_btn.addEventListener('onMouseDown', changeTextHandler, false);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dInputText';
        globalDispatcher.dispatchEvent(backHomeEvent);
    }

    /**
     * 隐藏提示浮层
     * @param e
     */
    function hideTipLayerHandler(e) {
        s.tip_mc.removeEventListener('onMouseDown', hideTipLayerHandler);
        s.tip_mc.visible = false;
    }

    function changeTextHandler(e) {
        var inputTxtVal = s.input_text.text;
        if (inputTxtVal.replace(/(^\s*)|(\s*$)/g, "") === '') {
            alert('请先输入转换文本!');
            return;
        }
        s.output_txt.text = inputTxtVal;
        s.input_text.text='';
    }
};
F2xExtend(dInputText.DInputText, F2xContainer);
dInputText.DInputText.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=new dInputText.F2xAuto_9();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:87.95});
	var _d1=new dInputText.F2xAuto_6();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"请在下面输入框内输入您的文本，change一下吧",21,"#FF9900","Arial",2,2,468.1,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:84.05,y:227.75});
	var _d3=Flash2x.s({type:0,data:"Egk3ANxIAA7hMBJvAAAIAAbhg"},{type:0,color:"#FFFFFF"},null);
	Flash2x.d(_d3,{x:320.1,y:315.9});
	var _d4=Flash2x.t(2,"",18,"#333333","Times New Roman",2,2,337.1,33,20,"left",false,false,"single",false);
	_d4.name="input_text";
	s.input_text=_d4;
	Flash2x.d(_d4,{x:85,y:451.1});
	var _d5=new dInputText.F2xAuto_3();
	Flash2x.d(_d5,{x:85,y:451.1});
	var _d6=Flash2x.t(2,"多行输入文本框\nflash2x",18,"#333333","Microsoft YaHei",2,2,337.1,115.05,20,"left",false,false,"multiline",false);
	Flash2x.d(_d6,{x:85,y:521.1});
	var _d8=Flash2x.s({type:0,data:"A6opFMA1RAAAIAASKMg1RAAAg"},null,{type:0,color:"#CCCCCC",lineWidth:1});
	Flash2x.d(_d8,{x:255.55,y:580.4});
	var _d7=Flash2x.s({type:0,data:"A6oJGIAAyLMA1RAAAIAASLg"},{type:0,color:"#FFFFFF"},null);
	Flash2x.d(_d7,{x:255.55,y:580.4});
	var _d9=new dInputText.F2xAuto_4();
	_d9.name="changeText_btn";
	s.changeText_btn=_d9;
	Flash2x.d(_d9,{x:495.45,y:469.6});
	var _d10=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d10,{x:85.95,y:171});
	var _d11=new dInputText.F2xAuto_8();
	Flash2x.d(_d11,{o:0.8008});
	var _d12=new dInputText.F2xAuto_11();
	s.addChild(_d12);
	s.addChild(_d11);
	s.addChild(_d10);
	s.addChild(_d9);
	s.addChild(_d7);
	s.addChild(_d8);
	s.addChild(_d6);
	s.addChild(_d5);
	s.addChild(_d4);
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end

};
