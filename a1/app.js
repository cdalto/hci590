var app = new Vue({
    el: "#app",
    data: {
        weight: "",
        feet: "",
        inches: ""
    },
    computed: {
        height: function () {
            return (parseInt(this.feet) * 12) + parseInt(this.inches);
        },
        bmi: function () {
            var calculatedBMI = (parseInt(this.weight) / (this.height * this.height)) * 703;

            if (Number.isNaN(calculatedBMI) || !Number.isFinite(calculatedBMI) || calculatedBMI == 0) {
                return "--.-";
            } else {
                return Number(calculatedBMI.toFixed(1));
            }
        },
        result: function () {
            if (this.bmi < 18.5) {
                return "Underweight BMI";
            } else if (this.bmi >= 18.5 && this.bmi < 25) {
                return "Normal BMI";
            } else if (this.bmi >= 25 && this.bmi < 30) {
                return "Overweight BMI";
            } else if (this.bmi > 30) {
                return "Obese BMI";
            } else {
                return "BMI";
            }
        }
    }
})