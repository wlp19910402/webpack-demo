define(['./common.js','jquery'],function (common,$) {
    return {
        initIndex:function () {
            // [1, 2, 3].map((n) => n + 1);
            console.log("common init index")
            $(function () {
                console.log("jquery console log")
            })
        },
        initCart:function(){
            console.log("common init cart")
        }
    }
})