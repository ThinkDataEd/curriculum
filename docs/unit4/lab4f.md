##***<u>Lab 4F - This model is big enough for all of us!</u>***

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Building better models**
* So far, in the labs, we've learned how to make predictions using the *line of best fit*, also knowns as *linear models* or *regression models*.

* We've also learned how to measure our model's prediction accuracy by cross-validation.

* In this lab, we'll investigate the following question:

    *Will including more variables in our model improve its predictions?*

###**Divide & Conquer**
* <span style="color:midnightblue;">**Start by loading the ```movie``` data and split it into two sets (See [Lab 4C](lab4c.md) for help).**</span>

    – <span style="color:midnightblue;">**A set named ```training``` that includes 75% of the data.**</span>

    – <span style="color:midnightblue;">**A set named ```testing``` that includes the remaining 25%.**</span>

    - <span style="color:midnightblue;">**Remember to use ```set.seed```.**</span>

* <span style="color:midnightblue;">**Create a linear model, using the ```training``` data, that predicts ```gross``` using ```runtime```.**</span>

    – <span style="color:midnightblue;">**Compute the MSE of the model by making predictions for the ```testing``` data.**</span>

* <span style="color:firebrick;">**Do you think that a movie's ```runtime``` is the only factor that goes into how much a
movie will make? What else might affect a movie's ```gross```?**</span>

###**Including more info**
* Data scientists often find that including more relevant information in their models leads to
better predictions.

    – <span style="color:midnightblue;">**Fill in the blanks below to predict ```gross``` using ```runtime``` and ```reviews_num```.**</span>

        lm(____ ~ ____ + ____, data = training)

* <span style="color:firebrick;">**Does this new model make more or less accurate predictions? Describe the process
you used to arrive at your conclusion.**</span>

* <span style="color:firebrick;">**Write down the code you would use to include a 3rd variable, of your choosing, in
your ```lm()```.**</span>

###**Own your own**
* <span style="color:firebrick;">**Write down which other variables in the ```movie``` data you think would help you make
better predictions.**</span>

    – <span style="color:firebrick;">**Are there any variables that you think would not improve our predictions?**</span>

* <span style="color:midnightblue;">**Create a model for all of the variables you think are relevant.**</span>

    – <span style="color:firebrick;">**Assess whether your model makes more accurate predictions for the ```testing```   
    data than the model that included only ```runtime``` and ```reviews_num```**</span>

* <span style="color:firebrick;">**With your neighbors, determine which combination of variables leads to the best
predictions for the ```testing``` data.**</span>