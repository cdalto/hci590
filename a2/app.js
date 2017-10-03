class Food {
    constructor(name, calories, servings) {
        this.name = name;
        this.calories = calories;
        this.servings = servings;
    }
};

var app = new Vue({
    el: "#app",
    data: {
        pantry: [],
        breakfast: [],
        lunch: [],
        dinner: [],
        snacks: [],
        newFood: new Food("", 0, 1.0)
    },
    methods: {
        addFood: function (food, meal) {
            meal.push(food);
            this.newFood = new Food("", 0, 1.0);
        },
        removeFood: function (food, meal) {
            meal.pop(food);
        }
    },
    computed: {
        totalCalories: function () {
            var calories = 0.0;
            var foodEatenToday = this.breakfast.concat(this.lunch).concat(this.dinner).concat(this.snacks);

            if (foodEatenToday.length === 0) {
                calories = 0.0;
            } else {
                foodEatenToday.forEach(function (food) {
                    calories = parseFloat(calories) + (parseFloat(food.calories) * parseFloat(food.servings));
                });
            }

            return calories;
        }
    }
});