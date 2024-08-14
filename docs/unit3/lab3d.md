##***<u>Lab 3D - Are you sure about that?</u>***

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Confidence and intervals**
* Throughout the year, we've seen that:

    – Means are used for describing the typical value in a sample or population, but we
    usually don't know what they are, because we can't see the entire population.

    – Means of samples can be used to *estimate* means of populations.

    – By including a margin of error with our estimate, we create an interval that increases our confidence that we've located the correct value of the population mean.

* Today, we'll learn how we can calculate *margins of error* by using a method called the
*bootstrap*.

    – Which comes from the phrase, *Picking yourself up by your own bootstraps*.

###**In this lab**
* <span style="color:midnightblue;">**Load the built-in ```atus``` (*American Time Use Survey*) dataset, which is a survey of how a
sample of Americans spent their day.**</span>

    – <span style="color:firebrick;">**The United States has an estimated population of 336,302,171 (as of April 15, 2024 9:10 a.m. PDT). How many
    people were surveyed for this particular dataset?**</span>

    - Note: If you want to know the US population or world population in real time, click on this link: [https://www.census.gov/popclock/](https://www.census.gov/popclock/ "https://www.census.gov/popclock/")

* The statistical investigative question we wish to answer is:

    *What is the mean age of people older than 15 living in the United States?*

* <span style="color:firebrick;">**Why is it important that the ATUS is a random sample?**</span>

* <span style="color:firebrick;">**Use our ```atus``` data to calculate an estimate for the average age of people older than 15
living in the U.S.**</span>

###**One bootstrap**
* A *bootstrapped* sample is when we take a random ```sample()``` of our original data (```atus```)
*WITH* replacement.

    – The ```size``` of the sample should be the same size as the original data.

* We can create a single *bootstrapped* sample for the ```mean``` in 3 steps:

    `1. Sample the number of the rows to use in our *bootstrap*.

    `2. ```slice``` those rows from our original data into our *bootstrap* data.

    `3. Calculate the mean of our *bootstrapped* data.

###**Our first bootstrap**
* <span style="color:midnightblue;">**Fill in the blanks to ```sample``` the row numbers we'll use in our *bootstrapped* sample.**</span>

    – Be sure to re-read what a *bootstrapped* sample is from the previous slide to help
    you fill in the blanks.

    – Use ```set.seed(123)``` before taking the sample.

        bs_rows <- ____(1:____, size = ____, replace = ____)

* <span style="color:midnightblue;">**Use the ```slice``` function to create a new dataset that includes each row from our
```sample```.**</span>

        bs_atus <- slice(atus, bs_rows)

###**Take a look**
* Look at the values of ```bs_rows``` and ```bs_atus```.

* <span style="color:firebrick;">**Write a paragraph that explains to someone that's not familiar with ```R``` how you created ```bs_rows``` and ```bs_atus```. Be sure to include an explanation of what the *values* of ```bs_rows``` mean and how those values are used to create ```bs_atus```. Also, be sure to explain what each argument of each function does.**</span>

###**One strap, two strap**
* <span style="color:midnightblue;">**Calculate the ```mean``` of the ```age``` variable in your ```bootstrapped``` data, then use a different value
of ```set.seed()``` to create your own, personal *bootstrapped* sample. Then calculate its ```mean```.**</span>

* <span style="color:firebrick;">**Compare this second *bootstrapped* sample with three other classmates and write a sentence about how similar or different the *bootstrapped* sample means were.**</span>

###**Many bootstraps**
* To use *bootstrapped* samples to create *confidence intervals*, we need to create many
*bootstrapped* samples.

    – Normally, the more *bootstrapped* samples we use, the better the *confidence
    interval*.

    – In this lab, we'll ```do()``` 500 *bootstrapped* samples.

* To make ```do()```-ing 500 *bootstraps* easier, we'll code our 3-step bootstrap method into a
function.

    – <span style="color:midnightblue;">**Open a new R Script (File -> New File -> R Script) to write your function into.**</span>

###**Bootstrap function**
* <span style="color:midnightblue;">**Fill in the blank space below with the 3 steps needed to create a *bootstrapped* sample ```mean```
for our ```atus``` data.**</span>

    – Each step should be written on its own line between the curly braces.

        bs_func <- function() {



        }

* <span style="color:midnightblue;">**Highlight and *Run* the code you write.**</span>

###**Visualizing our bootstraps**
* <span style="color:midnightblue;">**Once your function is created, fill in the blanks to create 500 *bootstrapped* sample means:**</span>

        bs_means <- do(____) * bs_func()

* <span style="color:firebrick;">**Create a ```histogram``` for your bootstrapped samples and describe the *center*, *shape*
and *spread* of its distribution.**</span>

    – These bootstrapped estimates no longer estimate the average age of people in the
    U.S.

    – Instead, they estimate how much the estimate of the average age of people in the
    U.S. varies.

* In the next slide, we'll look at how we can use these bootstrapped means to create *90%
confidence intervals*.

###**Bootstrapped confidence intervals**
* To create a 90% confidence interval, we need to decide between which two *ages* the middle
90% of our bootstrapped estimates are contained.

* <span style="color:firebrick;">**Using your ```histogram```, fill in the statement below:**</span>

    The lowest 5% of our estimates are below <u>&nbsp;&nbsp;&nbsp;&nbsp;</u><u>&nbsp;&nbsp;&nbsp;&nbsp;</u><u>&nbsp;&nbsp;&nbsp;&nbsp;</u><u>&nbsp;&nbsp;&nbsp;&nbsp;</u> years and the highest 5% of our
    estimates are above <u>&nbsp;&nbsp;&nbsp;&nbsp;</u><u>&nbsp;&nbsp;&nbsp;&nbsp;</u><u>&nbsp;&nbsp;&nbsp;&nbsp;</u><u>&nbsp;&nbsp;&nbsp;&nbsp;</u> years.

* <span style="color:midnightblue;">**Use the ```quantile()``` function to check your estimates.**</span>

* <span style="color:firebrick;">**Based on your bootstrapped estimates, between which two ages are we 90%
confident the actual ```mean``` age of people living in the U.S. is contained?**</span>

###**On your own**
* <span style="color:midnightblue;">**Using your *bootstrapped* sample means, create a 95% confidence interval for the ```mean``` age
of people living in the U.S.**</span>

* <span style="color:firebrick;">**Why is the 95% confidence interval wider than the 90% interval?**</span>

* <span style="color:firebrick;">**Write down how you would explain what a 95% confidence interval means to someone not taking *Introduction to Data Science*.**</span>