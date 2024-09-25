!!! warning "Unit 4 Lab Ojectives and Functions:"
        The documentation below lists the new functions that will appear in each lab. The lab itself will explain how to use each function. For more examples, refer to the RStudio Lab Codes and Functions file.

### Lab4A

* Objective: Students will learn how to compute the equation of a line of best fit and how to plot lines using add_line().


        <=
        >=
        add_line()
        lm(y ~ x, data)
        add_line(intercept, slope)


### Lab4B

* Objective: Students will compute predictions, residuals, and means squared error of a linear model. They will learn that the line of best fit is the line minimizing mean squared error.


        summarize()
        predict(model)

### Lab4C

* Objective: Students will learn the three steps of cross-validation and why it protects against overfitting. They will use cross-validation to answer the question: "How well does our model predict the heights of people we haven't yet measured?".


        predict(model, newdata)

### Lab4D

* Objective: Students will learn how to compute and interpret correlation coefficients. They will answer the question: "Which variables are better predictors of a movie's `audience_rating` when the predictions are made using a line of best fit?".


        cor()

### Lab4E

* Objective: Students will learn how to train a linear model including multiple predictor variables. They will investigate the question: "Will including more variables in our model improve its predictions?".


        lm(y ~ x1 + x2, data)

### Lab4F

* Objective: Students will learn how to fit a polynomial model to nonlinear data and understand that a polynomial of higher degree can be curvier.


        add_curve(model, col)
        poly(x, degree)

### Lab4G

* Objective: Students will learn how to make predictions by growing trees. They will also understand that misclassification rate measures how well a model predicts categorical variables.


        tree(y ~ x1 + x2, cp, minsplit, data)
        treeplot(model)

### Lab4H

* Objective: Students will learn how to use the k-means clustering algorithm to group data into clusters.


        kclusters(y ~ x, data, k)
