##**<u>Lab 1F - A Diamond in the Rough</u>**

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Messy data? Get used to it**
* Since lab 1, the data we've been using has been pretty *clean*.

* Why do we call it *clean*?

    – Variables were named so we could understand what they were about.

    – There didn't seem to be any *typos* in the values.

    – Numerical variables were considered numbers.

    – Categorical variables were composed of categories.

* Unfortunately, more often than not, data is *messy* until YOU clean it.

* In this lab, we'll learn a few essentials for cleaning *dirty* data.

###**Messy data?**
* What do we mean by messy data?

* Variables might have *non-descriptive names*

    – *Var01*, *V2*, *a*, ...

* Categorical variables might have *misspelled categories*

    – *"blue"*, *"Blue"*, *"blu"*, ...

* Numerical variables might have been *input incorrectly*. For example, if we're talking about people's height in inches:

    – *64.7*, *6.86*, *676*, ...

* Numerical variables might be *incorrectly coded* as categorical variables (or vice-versa)

    – "64.7", "68.6", "67.6"

###**The American Time Use Survey**
* To show you what *dirty* data looks like, we'll check out the *American Time Use Survey*, or *ATU* survey.

* What is ATU survey?

    – It's a survey conducted by the US government (Specifically the Bureau of Labor Statistics).

    – They survey thousands of people to find out exactly what activities they do throughout a single day.

    – These thousands of people combined together give an idea about how much time the typical person living in the US spends doing various activites.

###**Load and go:**
* <span style="color:midnightblue;">**Type the following commands into your console:**</span>

        data(atu_dirty)
        View(atu_dirty)

* <span style="color:firebrick;">**(1) Just by viewing the data, what parts of our ATU data do you think need cleaning?**</span>

###**Description of ATU Variables**
* The description of the actual variables:

    – ```caseid```: Anonymous ID of survey taker.

    – ```V1```: The age of the respondent.

    – ```V2```: The sex of the respondent.

    – ```V3```: Whether the person is employed full-time or part-time.

    – ```V4```: Whether the person has a physical difficulty.

    – ```V5```: How long the person sleeps, in minutes.

    – ```V6```: How long the survey taker spent on homework, in minutes.

    – ```V7```: How long the respondent spent socializing, in minutes.

###**New name, same old data**
* To fix the variable names, we need to *assign* a new set of names in place of the old ones.

    – Below is an example of the ```rename``` function:
    
        atu_cleaner <- rename(atu_dirty, age = V1,
                    sex = V2)   

* <span style="color:midnightblue;">**Use the example code and the variable information on the previous slide to rename the rest of the variables in ```atu_dirty```.**</span>

* <span style="color:firebrick;">**(2) Write down the  new names you chose for the rest of the variables in ```atu_dirty```.**</span>

    – Names should be short, contain no spaces and describe what the variable is related to. So use abbreviations to your heart's content.

###**Next up: Strings**
* In programming, a *string* is sort of like a *word*.

    – It's a value made up of *characters* (i.e. letters)

* The following are examples of strings. Notice that each **string** has quotes before and after.

        "string"    
        "A1B2c3"
        "Hot Cocoa"
        "0015"
    
###**Numbers are words? (Sometimes)**
* In some cases, ```R``` will treat values that look like *numbers* as if they were *strings*.

* Sometimes we do this on purpose.

    – For example, we can code ```Yes/No``` variables as ```"1"```/```"0"```.

* Sometimes we don't mean for this to happen.

    – The *number of siblings* a person has should not be a string.

* Look at the ```str```ucture of your data and the variable descriptions from a few slides back:

    – <span style="color:firebrick;">**(3) Write down the variables that should be *numeric* but are improperly coded as *strings* or *characters*.**</span>

###**Changing strings into numbers**
* To fix this problem, we need to tell ```R``` to think of our *"numeric"* variables as numeric variables.

* We can do this with the ```as.numeric``` function.

    – An example using this function is below:

        as.numeric("3.14")
        ## [1] 3.14

* Notice: We started with a string, ```"3.14"```, but ```as.numeric``` was able to turn it back into a number.

###**Mutating in action**
* <span style="color:firebrick;">**(4) Look at the variables you thought should be *numeric* and select one. Then fill in the blanks below to see how we can correctly code it as a number:**</span>

        atu_cleaner <- mutate(atu_cleaner,
                age = as.numeric(age),
                ___ = as.numeric(___))


* <span style="color:midnightblue;">**Once you have this code working, use a similar line of code to correctly code the other *numeric* variables as numbers.**</span>

###**Deciphering Categorical Variables**
* We mentioned earlier that we sometimes code categorical variables as numbers.

    – For example, our ```sex``` variable uses ```"01"``` and ```"02"``` for ```"Male"``` and ```"Female"```, respectively.

* It's often much easier to analyze and interpret when we use more descriptive categories, such as ```"Male"``` and ```"Female"```.

###**Factors and Levels**
* ```R``` has a special name for *categorical* variables, called *factors*.

* ```R``` also has a special name for the different *categories* of a *categorical* variable.

    – The individual categories are called *levels*.

* To see the levels of ```sex``` and their counts type:

        tally(~sex, data = atu_cleaner)

* <span style="color:firebrick;">**(5) Use similar code as we used above to write down the levels for the three factors in our data.**</span>

###**A level by any other name...**
* If we know that ```'01'``` means ```'Male'``` and ```'02'``` means ```'Female'``` then we can use the following code to recode the *levels* of *sex*.

* <span style="color:midnightblue;">**Type the following command into your console:**</span>

        atu_cleaner <- mutate(atu_cleaner, sex =
                recode(sex,
                    "01" = "Male",
                    "02" = "Female"))

* This code is definitely a bit of a mouthful. Let's break it down.

###**Allow me to explain**

    atu_cleaner <- mutate(atu_cleaner, sex =
            recode(sex, "01" = "Male",
                "02" = "Female"))

* This code is saying:

    – Replace my current version of ```atu_cleaner```...

    – with a mutated one where ...

    – the ```sex``` variable's levels ...

    – have been recoded..."

    – where ```"01"``` will now be ```"Male"```...

    – and ```"02"``` will now be ```"Female"```.

###**Finish it off!**
* <span style="color:midnightblue;">**Recode the categorical variable about whether the person surveyed had a physical challenge or not. The coding is currently:**</span>

    – ```"01"```: Person surveyed *did not* have a physical challenge.

    – ```"02"```: Person surveyed *did* have a physical challenge.

* **Write a script that:**

    (1) Loads the ```atu_dirty``` data set

    (2) Cleans the the data as we have in this lab
    
    (3) Saves a copy of the cleaned data (see next slide).

* *NOTE: You can watch this video to learn about RScripts:*
    <div align="center"><iframe width="560" height="315"
    src="https://www.youtube.com/embed/OPqjL9AzmkE" allowfullscreen>
    </iframe><br><a href="https://www.youtube.com/embed/OPqjL9Azmk">https://www.youtube.com/embed/OPqjL9Azmk</a></div>

###**The final lines**
* The last few lines of your script are extremely important because they will save all of your work.

* Be sure to ```View``` your data and check its ```str```ucture to make sure it looks clean and tidy before saving.

* <span style="color:midnightblue;">**Run the code below:**</span>

        atu_clean <- atu_cleaner

* This code will create a new data frame in your *Environment* called ```atu_clean``` which is a final copy of ```atu_cleaner```.

    – If ```atu_clean``` is swept from your *Environment* all of the changes you made will NOT be saved.

    – You would need to re-run the script to clean the data again

* To permanently save your changes you need to save the file as an ```R``` data file or ```.Rda```

* <span style="color:midnightblue;">**Run the code below:**</span>

        save(atu_clean, file = "atu_clean.Rda")

* Look in your *Files* pane for the ```atu_clean.Rda``` file

    – This is as permanent copy of your clean atu data.

    – To load the data onto your *Environment* click on the file.

    – A pop-up window confirming the upload will appear.

###**Flex your skills**
* Now that you have learned some cleaning data basics, it’s time to revisit the ```food``` data.

    – <span style="color:midnightblue;">**```Import``` your ```food``` data onto the *Environment* pane.**</span>

* <span style="color:midnightblue;">**Run the code below:**</span>

        histogram(~calories | healthy_level, data = food)

* <span style="color:firebrick;">**(6) Write and run code using the ```as.factor()``` function to convert ```healthy_level``` into a categorical variable and re-run the ```histogram``` function.**</span>

    – Notice that the ```healthy_level``` categories are now numbers as opposed to tick-marks. This is an improvement but an even better solution would be to ```recode``` the categories.

* <span style="color:firebrick;">**(7) Write and run code to ```recode``` the ```healthy_level``` categories and re-run the ```histogram``` function.**</span>

    – "1" = "Very Unhealthy"

    – "2" = "Unhealthy"

    – "3" = "Neutral"

    – "4" = "Healthy"

    – "5" = "Very Healthy"

* If your ```food``` data is cleared from your *Environment*, the changes that you made to the ```healthy_level``` variable will not be saved.

* <span style="color:midnightblue;">**To save your changes permanently save your ```food``` file as an ```R``` data file.**</span>