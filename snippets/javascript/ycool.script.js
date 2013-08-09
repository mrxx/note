//Dirty way to change ycool.com blog post private
//Update Photo private,pleas change AngPost to AngPhoto
hack=function(pageurl){
    console.log(pageurl);
    $.ajax({url:pageurl})
        .done(function(html){
            $('.container-items').empty();
            $('.container-items').append($(html).find('.container-items .item-container'));
            $(html).find(".item-thumb a").each(function(v){
                posturl=$(this).attr("href");
                $.post(posturl+"/edit",{'AngPost[is_private]':1},function(data){console.log(posturl+"---done");});
            });
            if($(html).find(".next").hasClass("disabled")) {consloe.log("********All done******");return;}
            next = $(html).find(".next a").attr("href");
            hack(next);
        }
        )};
        hack($('.next a').attr("href"));
