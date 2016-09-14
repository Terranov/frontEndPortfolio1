/*
 notifyMe jQuery Plugin v1.0.0
 Copyright (c)2014 Sergey Serafimovich
 Licensed under The MIT License.
*/
(function(e) {
    e.fn.notifyMe = function(t) {
        var r = e(this);
        var i = e(this).find("input[name=email]");
        var s = e(this).attr("action");
        var o = e(this).find(".note");
        e(this).on("submit", function(t) {
            t.preventDefault();
            var h = i.val();
            var p = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (p.test(h)) {
                $(".message").removeClass("error bad-email success-full");
                $(".message").hide().html('').fadeIn();
                o.show();
                e.ajax({
                    type: "POST",
                    url: s,
                    data: {
                        email: h
                    },
                    dataType: "json",
                    error: function(e) {
                        o.hide();
                        if (e.status == 404) {
                            $(".message").hide().html('<p class="notify-valid"><i class="icon ion-close-round"></i> Service is not available at the moment. Please check your internet connection or try again later.</p>').slideDown();
                        } else {
                            $(".message").hide().html('<p class="notify-valid"><i class="icon ion-close-round"></i> Oops. Looks like something went wrong. Please try again later.</p>').fadeIn();
                        }
                    }
                }).done(function(e) {
                    o.hide();
                    if (e.status == "success") {
                        $(".message").removeClass("bad-email").addClass("success-full");
                        $(".message").hide().html('<p class="notify-valid"><i class="icon ion-checkmark-round"></i> Parabéns! Você está na lista. Informaremos assim que lançarmos.</p>').fadeIn();
                    } else {
                        if (e.type == "ValidationError") {
                            $(".message").hide().html('<p class="notify-valid"><i class="icon ion-close-round"></i> Endereço inválido. Por favor, informe outro email.</p>').fadeIn();
                        } else {
                            $(".message").hide().html('<p class="notify-valid"><i class="icon ion-close-round"></i> Oops. Parece que algo deu errado. Tente novamente mais tarde.</p>').fadeIn();
                        }
                    }
                })
            } else {
                $(".message").addClass("bad-email").removeClass("success-full");
                $(".message").hide().html('<p class="notify-valid"><i class="icon ion-close-round"></i> Your e-mail address is incorrect. Please check it and try again.</p>').fadeIn();
                o.hide();
            }

            // Reset and hide all messages on .keyup()
            $("#notifyMe input").keyup(function() {
                $(".message").fadeOut();
            });
        })
    }

    

})(jQuery)