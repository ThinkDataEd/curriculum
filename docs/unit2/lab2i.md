##**<u>Lab 2I - R's Normal Distribution Alphabet</u>**

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Where we're headed**
* In the last lab, you were able to overlay a normal curve on histograms of data to help you
decide if the data's distribution is close to a normal distribution.

    – We also saw that calculating the ```mean``` of random shuffles also produces
    differences that are normally distributed.

* In this lab, we'll learn how to use some other ```R``` functions to:

    – Simulate random draws from a normal distribution.

    – Calculate probabilities with normal distributions.

###**Get set up**
* <span style="color:firebrick;">**(1) Start by loading the ```titanic``` data. Write and run code calculating the ```mean``` ```age``` of people in the data but ```shuffle``` their ```survival``` status 500 times.**</span>

    – <span style="color:midnightblue;">**```Assign``` this data the name ```shfls```.**</span>

* <span style="color:firebrick;">**(3) After creating ```shfls```, write and run code using ```mutate``` to add a new variable to the dataset.**</span>

    – This new variable should have the name ```diff``` and should be the ```mean``` ```age``` of those who survived minus those who died.

* <span style="color:firebrick;">**(3) Finally, write and run code calculating the ```mean``` and ```sd``` of the ```diff``` variable.**</span>

    – ```Assign``` these values the name ```diff_mean``` and ```diff_sd```.

###**Is it normal?**
* Before we proceed, we need to verify that our ```diff``` variable looks approximately normally
distributed.

    – <span style="color:firebrick;">**(4) Is the distribution close to normal? Explain how you determined this. Describe the center and spread of the distribution.**</span>

    – <span style="color:firebrick;">**(5) Compute and write down the mean difference in the age of the *actual* survivors and the *actual* non-survivors.**</span>

###**Using the normal model**
* Since the distribution of our ```diff``` variable appears normally distributed, we can use a
normal model to estimate the probability of seeing differences that are more extreme than
our actual data.

* <span style="color:firebrick;">**(6) Draw a sketch of a normal curve. Label the mean age difference, based on your shuffles, and the actual age difference of survivors minus non-survivors from the actual data. Then shade in the area, under normal the curve, that is *smaller* than the actual difference.**</span>

* <span style="color:firebrick;">**(7) Fill in the blanks to calculate the probability of an even smaller difference occurring than our actual difference using a normal model.**</span>

        pnorm(____, mean = diff_mean, sd = ____)

###**Extreme probabilities**
* The probability you calculated in the previous slide is an estimate for how often we expect to
see a difference smaller than the actual one we observed, by chance alone.

* <span style="color:firebrick;">**(8) If you wanted to instead calculate the probability that the difference would be larger than the one observed, we could run (fill in the blanks):**</span>

        1 - pnorm(____, mean = diff_mean, sd = ____)

###**Simulating normal draws**
* We can simulate random draws from a normal distribution with the ```rnorm``` function.

    – <span style="color:firebrick;">**(9) Fill in the blanks in the following two lines of code to simulate 100 heights of randomly chosen men. Assume the ```mean``` height is 67 inches and the ```standard deviation``` is 3 inches.**</span>

        draws <- rnorm(____, mean = ____, sd = ____)

    – <span style="color:firebrick;">**Fill in the blank below to plot your simulated heights with a ```histogram```.**</span>

        histogram(draws, fit = ____)


###**P's and Q's**
* We've seen that we can use ```pnorm``` to calculate *probabilities* based on a specified *quantity*.

    – Hence, why we call it "P" norm.

* Now we'll see how to do the opposite. That is, calculate the *quantity* for a specific
*probability*.

    – Hence why we'll call this a "Q" norm.

* <span style="color:firebrick;">**(11) How tall can a man be and still be in the shortest 25% of heights if the mean height is 67 inches with a standard deviation of 3 inches?**</span>

        qnorm(____, mean = ____, sd = ____)

###**On your own**
Conduct one of the statistical investigations below:

* Using the ```titanic``` data:

    – <span style="color:firebrick;">**(12) Were women on the Titanic typically younger than men? Write and run code using a histogram, 500 random shuffles and a normal model to answer the
    question.**</span>

* Using the ```cdc``` data:

    – <span style="color:firebrick;">**(13) Using 500 random shuffles and a normal model, how much taller would the typical male have to be than the typical female in order for the difference to be in the upper 1% by chance alone?**</span>

    – <span style="color:firebrick;">**(14) How can we use this value to justify the claim that the average ```Male``` in our data is taller than the average ```Female```?**</span>
