class Food {
    constructor(name, calories, servings) {
        this.name = name;
        this.calories = calories;
        this.servings = servings;
    }
    constructor() {
        this.name = "";
        this.calories = 0;
        this.servings = 0.0;
    }
}

var app = new Vue({
    el: "#app",
    data: {
        myFood: [],
        breakfast: [],
        lunch: [],
        dinner: [],
        snacks: [],
        totalCalories: 0.0
    },
    methods: {
        addFood: function (food, meal) {
            meal.push(food);
        },
        removeFood: function (food, meal) {
            meal.pop(food);
        },
        calculateTotalCalories: function () {
            var foodEatenToday = this.breakfast.Concat(lunch).Concat(dinner).Concat(snacks);

            foodEatenToday.forEach(function (food) {
                this.totalCalories = this.totalCalories + (food.calories * food.servings);
            });
        }
    }
});