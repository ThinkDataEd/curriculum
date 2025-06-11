##**<u>Lab 2B - Oh the Summaries...</u>**

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Just the beginning**
* Means, medians, and MAD are just a few examples of *numerical summaries*.

* In this lab, we will learn how to calculate and interpret additional summaries of distributions
    such as: minimums, maximums, ranges, quartiles and IQRs.

    – We'll also learn how to write our first custom function!

* Start by loading your *Personality Color* data again and name it ```colors```.

###**Extreme values**
* Besides looking at *typical* values, sometimes we want to see *extreme* values, like the smallest
and largest values.

    – To find these values, we can use the ```min```, ```max``` or ```range``` functions. These functions use a similar syntax as the ```mean``` function.

* <span style="color:firebrick;">**(1) Find and write down the ```min``` value and ```max``` value for your predominant color.**</span>

* <span style="color:firebrick;">**(2) Apply the ```range``` function to your predominant color and describe the output.**</span>

    – The *range* of a variable is the difference between a variable’s smallest and largest value.

    – Notice, however, that our ```range``` function calculates the maximum and minimum values for a variable, but not the difference between them.

    – Later in this lab you will create a custom ```Range``` function that will calculate the difference.


###**Quartiles (Q1 & Q3)**
* The **median** of our data is the value that splits our data in half.

    – Half of our data is smaller than the *median*, half is larger.

* *Q1* and *Q3* are similar.

    – 25% of our data are smaller than *Q1*, 75% are larger.
    
    – 75% of our data are smaller than *Q3*, 25% are larger.

* <span style="color:firebrick;">**(3) Fill in the blanks to compute the value of *Q1* for your predominant color.**</span>

        quantile(~____, data = ____, p = 0.25)

* <span style="color:firebrick;">**(4) Use a similar line of code to calculate and write down *Q3*, which is the value that's larger than 75% of our data.**</span>    

###**The Inter-Quartile-Range (IQR)**

* <span style="color:firebrick;">**(5) Write and run code making a ```dotPlot``` of your *predominant* color's scores. Make sure to include the ```nint``` option.**</span>

* Visually (don't worry about being super-precise):

    – <span style="color:midnightblue;">**Cut the distribution into quarters so the *number of data points* is equal for each piece.
    (Each piece should contain 25% of the data.)**</span>

    * Hint: You might consider using the ```add_line(vline =  )``` to add vertical lines at the quarter marks.

    – <span style="color:firebrick;">**(6) Write down the numbers that split the data up into these 4 pieces.**</span>

    – <span style="color:firebrick;">**(7) How long is the interval of the middle two pieces?**</span>

    – This length is the **IQR**.

###**Calculating the IQR**
* The ```IQR``` is another way to describe *spread*.

    – It describes how *wide* or *narrow* the middle 50% of our data are.

* Just like we used the ```min``` and ```max``` to compute the ```range```, we can also use the *1st* and *3rd*
quartiles to compute the *IQR*.

* <span style="color:firebrick;">**(8) Use the values of *Q1* and *Q3* you calculated previously and find the *IQR* by hand.**</span>

    – <span style="color:firebrick;">**(9) Then write and run code using the ```iqr()``` function to calculate it for you.**</span>

* <span style="color:firebrick;">**(10) Which personality color score has the widest spread according to the *IQR*? Which is
narrowest?**</span>    

###**Boxplots**

* By using the medians, quartiles, and min/max, we can construct a new single variable plot called
the **box and whisker** plot, often shortened to just **boxplot**.

* <span style="color:firebrick;">**(11) By showing someone a ```dotPlot```, how would you teach them to make a *boxplot*? Write out
your explanation in a series of steps for the person to use.**</span>

    – <span style="color:firebrick;">**(12) Use the steps you write to create a sketch of a *boxplot* for your predominant
    color's scores in your journal.**</span>

    – <span style="color:firebrick;">**(13) Then use the ```bwplot``` function to create a *boxplot* using ```R```.**</span>

###**Our favorite summaries**
* In the past two labs, we've learned how to calculate numerous *numerical summaries*.

    – Computing lots of different summaries can be tedious.

* <span style="color:firebrick;">**(14) Fill in the blanks below to compute some of our *favorite* summaries for your predominant color all
at once.**</span>

        favstats(~____, data = colors)    

###**Calculating a range value**
* We saw in the previous slide that the ```range``` function calculates the maximum and minimum
values for a variable, but not the difference between them.

* We could calculate this difference in two steps:

    – Step 1: Use the ```range``` function to ```assign``` the max and min values of a variable the name
    ```values```. This will store the output from the ```range``` function in the *Environment* pane.

        values <- range(~____, data = colors)

    – Step 2: Use the ```diff``` function to calculate the difference of ```values```. The input for the ```diff``` function needs to be a vector containig two numeric values.

        diff(values)

* <span style="color:firebrick;">**(15) Use these two steps to calculate the *range* of your predominant color.**</span>

###**Introducing custom functions**
* Calculating the *range* of many variables can be tedious if we have to keep performing the same
two steps over and over.

    – We can combine these two steps into one by writing our own custom ```function```.

* Custom functions can be used to combine a task that would normally take many steps to
compute and simplify them into one.

* The next slide shows an example of how we can create a custom function called ```mm_diff``` to
calculate the absolute difference between the ```mean``` and ```median``` value of a ```variable``` in our
```data```.

###**Example function**

    mm_diff <- function(variable, data) {
      mean_val <- mean(variable, data = data)
      med_val <- median(variable, data = data)
      abs(mean_val - med_val)
    }

* The function takes two *generic* arguments: ```variable``` and ```data```.

* It then follows the steps between the curly braces ```{ }```.

    – Each of the *generic* arguments is used inside the ```mean``` and ```median``` functions.

* <span style="color:midnightblue;">**Copy and paste the code above into an *R Script* and *run* it.**</span>

* The ```mm_diff``` function will appear in your *Environment* pane.

###**Using mm_diff()**
* After running the code used to create the function, we can use it just like we would any other
numerical summary.

    – <span style="color:firebrick;">**(16) In the *console*, fill in the blanks below to calculate the absolute difference between the
    ```mean``` and ```median``` values of your predominant color:**</span>

        ____(~____, data = ____)

* <span style="color:firebrick;">**(17) Which of the four colors has the largest absolute difference between the ```mean``` and ```median```
values?**</span>

    – <span style="color:firebrick;">**(18) By examining a ```dotPlot``` for this personality color, make an argument why either
    the ```mean``` or ```median``` would be the better description of the *center* of the data.**</span>

###**Our first function**
* <span style="color:firebrick;">**(19) Using the previous example as a guide, create a function called ```Range``` (*note the capial 'R'*) that
calculates the *range* of a variable by filling in the blanks below:**</span>

        ____ <- function (____, ____) {
          values <- range(____, data = ____)
          diff(___)
        }

* <span style="color:firebrick;">**(20) Use the ```Range``` function to find the personality color with the largest difference between the ```max``` and ```min``` values.**</span>

###**On your own**
* <span style="color:firebrick;">**(21) Create a function called ```myIQR``` that uses the ```quantile``` function to compute the
middle 30% of the data.**</span>