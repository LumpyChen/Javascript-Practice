"use strict";

{
    var foot = {
        kick: function kick() {
            var _this = this;

            this.yelp = "Ouch!";
            setImmediate(function () {
                return console.log(_this.yelp);
            });
        }
    };
    foot.kick();
}