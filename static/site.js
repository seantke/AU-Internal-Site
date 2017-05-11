jQuery(document).ready(function($) {
    var $data = "";
    var navHeight = $("#main-nav")[0].clientHeight + $("#wpadminbar")[0].clientHeight;
    $("#cat-btn").on("click", function() {
        var cat = $("#category-select").val();
        //    $("#archive-load").load("/terms/" + cat);
        $.ajax({
                url: "/terms/" + cat,
                cache: false,
                beforeSend: function() {
                    $("#archive-load").html('<div class="container"><img src="http://eoanalytics.site/wp-content/uploads/2017/04/InternetSlowdown_Day.gif"></div>');
                }
            })
            .done(function(html) {
                $("#archive-load").html(html);
            });
    });

    $("#g372 path").on("click", function(e) {
        var pathid = "dataset-" + $(this)[0].id;
        $("html, body").animate({
            scrollTop: $("#" + pathid)[0].offsetTop - 55
        }, 400);
    });

    var back2top = 0;
    $(window).on("scroll", function(e) {
        var $scroll = $(window).scrollTop();

        if (back2top === 0 && $("#back2top")[0]) {
            back2top = $("#back2top")[0].offsetTop;
        }
        if ($scroll >= (back2top - navHeight)) {
            $("#back2top").css({
                position: "fixed",
                top: navHeight + "px"
            });
        } else {
            $("#back2top").css({
                position: "absolute",
                top: "initial"
            });
        }
    });

    $("#json-zone").on("click", "#back2top", function(e) {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
    });

    $("body").on("click", ".togglebox", function(e) {
        if ($(this).attr("data-toggled") === "true") {
            $(this).find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
            $(this).siblings(".togglecontent").hide();
            $(this).attr("data-toggled", "false");
        } else {
            $(this).find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
            $(this).siblings(".togglecontent").show();
            $(this).attr("data-toggled", "true");
        }
    });

    // $.getJSON("/wp-content/themes/geohub-timber/static/od.json").done(function(data) {
    //     $.each(data, function(key, val) {
    //         var row = [];
    //
    //         row.push(``);
    //         row.push(`<div class="od-stage-container" id="${val.hash}">`);
    //         row.push(`<h2>${val.Stage}</h2>`);
    //         row.push(`<div>Primary Responsibility:`);
    //         val["Primary Responsibility"].forEach(function(v) {
    //             row.push(`${v} `);
    //         });
    //         row.push(`</div>`);
    //         row.push(`<div class="od-stage-datasets">`);
    //         row.push(`<h3>Datasets currently in this Stage:</h3>`);
    //         val["datasets"].forEach(function(v) {
    //             row.push(`<div><i class="fa fa-database"></i> ${v}</div>`);
    //         });
    //         row.push(`</div>`);
    //         row.push(`<div class="od-stage-card">`);
    //         row.push(` <div class="od-stage-title togglebox">`);
    //         row.push(`<h3><i class="fa fa-plus"></i> Objectives:</h3>`);
    //         row.push(` </div>`);
    //         row.push(` <div class="od-stage-content togglecontent">`);
    //         val["Objectives"].forEach(function(v) {
    //             row.push(`${v} `);
    //         });
    //         row.push(`</div>`);
    //         row.push(` </div>`);
    //         row.push(` <div class="od-stage-card">`);
    //         row.push(`<div class="od-stage-title togglebox">`);
    //         row.push(`<h3><i class="fa fa-plus"></i> Consulted Staff and purspose for consultation:</h3>`);
    //         row.push(`</div>`);
    //         row.push(`<div class="od-stage-content togglecontent">`);
    //         row.push(`<ul>`);
    //         $.each(val["Consulted Staff"], function(k, v) {
    //             row.push(`<li>${v} - ${val["Purpose of Consultations"][k]}</li>`);
    //         });
    //         row.push(`</ul>`);
    //         row.push(`</div>`);
    //         row.push(`</div>`);
    //         row.push(`</div>`);
    //
    //         $("#json-zone").append(row.join(' '));
    //     });
    // });
});
