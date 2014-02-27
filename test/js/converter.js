var Converter = (function() {

    // Private stuff up here
    var converterValue = 2.2;


    // Public methods here
    return {
        convertFromImperialToMetric: function(weight) {
            var num = parseInt(weight);

            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = num / converterValue;
            return Math.round(num);
        },

        convertFromMetricToImperial: function(weight) {
            var num = parseInt(weight);

            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = converterValue / num;
            return Math.round(num);
        }
    }
}());