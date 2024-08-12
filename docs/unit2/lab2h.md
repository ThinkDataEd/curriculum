##**<u>Lab 2H - Eyeballing Normal</u>**

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**What's normal?**
* The **normal distribution** is a curve we often see in real data.

    – We see it in people's blood pressures and in measurement errors.

* When data appears to be *normally distributed*, we can use the *normal model* to:

    – Simulate *normally distributed* data.

    – Easily compute probabilities.

* In this lab, we'll look at some previous datasets to see if we can find data that are roughly
normally distributed.

###**The normal distribution**
* The normal distribution is *symmetric about the mean*:

    – The ```mean``` is found in the very center of the distribution.

    – And the curve looks the same to the left of the mean as it does on the right.

* <span style="color:midnightblue;">**Use the following to draw a normal distribution:**</span>

        plotDist('norm', mean = 0, sd = 1)

###**The mean and sd of it**
* To draw a normal curve, we need to know exactly 2 things:

    – The ```mean``` and ```sd```.

* The ```sd```, or **standard deviation**, is a measure of spread that's similar to the ```MAD```.

* <span style="color:firebrick;">**Which part of the normal curve changes when the value of the ```mean``` changes?**</span>

* <span style="color:firebrick;">**Which part of the normal curve changes when the value of the ```sd``` changes?**</span>

* *Hint:* Try changing the ```mean``` and ```sd``` values in the ```plotDist``` function.


###**Finding normal distributions**
* <span style="color:midnightblue;">**Load the ```cdc``` data and use the ```histogram``` function to answer the following:**</span>

* <span style="color:firebrick;">**Think about the ```height``` and ```weight``` variables. Based on what you know about these variables, which of the variables do you think have distributions that will look like the normal distribution?**</span>

    – <span style="color:firebrick;">**Make histograms of these variables. Which ones look like the normal
    distribution?**</span>

    – *Hint:* To help answer this question, try including the option ```fit = "normal"``` in the
    histogram function. You might also try faceting by ```sex```.

###**Using normal models**
* Data scientists like using normal models because it often resembles real data.

    – *But not EVERYTHING is normally distributed.*

* As a data scientist in training, you must decide when a normal model seems appropriate.

    – No model is ever perfect 100% of the time.

    – If you choose a model, you should be able to justify why you chose it.

###**On your own**
* <span style="color:firebrick;">**For each of the following, determine which, if any, appear to be normally distributed. Explain your reasoning:**</span>

    – <span style="color:firebrick;">**The difference in ```percentages``` between male and female survivors in a slasher film for 500 random shuffles.**</span>

    – <span style="color:firebrick;">**The difference in ```median``` fares between survivors and non-survivors on the Titanic for 500 random shuffles.**</span>

    – <span style="color:firebrick;">**The difference in ```mean``` fares between survivors and non-survivors on the Titanic for 500 random shuffles.**</span>

* Hint: Refer to Lab 2E and 2F.