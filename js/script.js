let progressBarVar = 0;

function setProgressBarValue() {
    $('.progress-bar').width(progressBarVar+'%');
    $('.progress-bar').text(progressBarVar+'%')
};

function addOnePercent () {
    if (progressBarVar+1<100) {
        progressBarVar = progressBarVar+1;
        
    } else {
        progressBarVar = 100;
    };

    setProgressBarValue();
};

function addThreePercent () {
    if (progressBarVar+3<100) {
        progressBarVar = progressBarVar+3;
        
    } else {
        progressBarVar = 100;
    };
    setProgressBarValue();
};

function addSevenPercent () {
    if (progressBarVar+7<100) {
        progressBarVar = progressBarVar+7;
        
    } else {
        progressBarVar = 100;
    };
    setProgressBarValue();
};

function init() {
    $('.btn-1').click(addOnePercent);
    $('.btn-2').click(addThreePercent);
    $('.btn-3').click(addSevenPercent);
};

  $(document).ready(init);