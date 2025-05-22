##**<u>Lab 1B - Get the picture?</u>**

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Where'd we leave off ...**
* In the previous lab, we started to get acquainted with the layout of RStudio and some of the commands.

* In this lab, we'll learn about different *types* of variables.

    – Such as those that are measured by numbers and others that have values that are categories.

* We'll also look at ways to visualize these different types of data using *plots* (a word data scientists use interchangeably with the word *graph*).

* <span style="color:midnightblue;">**Find the *History* tab in RStudio and click on it. Figure out how to use the information to reload the ```cdc``` data.**</span>

###**Variable Types**
* Numerical variables have values that are measured in units.

* Categorical Variables have values that describe or categorize our observations.

* <span style="color:midnightblue;">**```View``` your ```cdc``` data and find the columns for ```height``` and ```sex``` (use the *History* pane again if you need help to ```View``` your data).**</span>

    – <span style="color:firebrick;">**(1) Is ```height``` a numerical or categorical variable? Why?**</span>

    – <span style="color:firebrick;">**(2) Is ```sex``` a numerical or categorical variable? Why?**</span>

    – <span style="color:firebrick;">**(3) List either the different categories or what you think the measured units are for ```height``` and ```sex```.**</span>

###**Which is which?**
* <span style="color:midnightblue;">**Run the code you used in the previous lab to display the ```names``` of your ```cdc``` data's variables (use the code displayed in the *History* pane to resubmit previously typed commands).**</span>

<img src="../../img/lab1b_slide4circle.png" style="width:430px;height:130px;"/>

* <span style="color:firebrick;">**Use the code's output to help you complete the following:**</span>

    – <span style="color:firebrick;">**(4) Write down 3 variables that you think are *categorical* variables and why.**</span>

    – <span style="color:firebrick;">**(5) Write down 3 variables that you think are *numerical* variables and why.**</span>

###**Data Structures**
* One way to get a good summary of your data is to look at the data's *structure*.

    – One way to view this info would be to click on the little blue arrow next to ```cdc``` in the *Environment* pane.

    – Another way would be to run the following in the console:

        str(cdc)

* <span style="color:firebrick;">**(6) What information does the ```str``` function output?**</span>

* <span style="color:firebrick;">**(7) Were you able to correctly guess which variables were categorical and numeric? Which ones did you mislabel?**</span>

###**Visualizing data**
* Visualizing data is a really helpful way to learn about our variables.

* <span style="color:firebrick;">**(8) Choose one numeric variable. Write and run codes to create a ```bargraph``` and a ```histogram```.**</span>

* <span style="color:firebrick;">**(9) Choose one categorical variable. Write and run codes to create a ```bargraph``` and a ```histogram```.**</span>

* <span style="color:firebrick;">**(10) Which function, either ```bargraph``` or ```histogram```, is better at visualizing categorical variables? Which is better at visualizing numerical variables?**</span>

###**We have options**
* <span style="color:firebrick;">**(11) Write and run the code to make a graph that shows the distribution of people’s ```weight```.**</span>

    – <span style="color:firebrick;">**(12) Describe the distribution of ```weight```. Make sure to describe the *shape*, *center* and *spread* of the distribution.**</span>

* *Options* can be added to plotting functions to change their appearance. The code below includes the ```nint``` option which controls the number of *intervals* in a numerical plot.    

    – Options, also known as *arguments*, are additional pieces of information you provide to a function, and are separated by commas.
    
    – <span style="color:midnightblue;">**Type the command below on your console and then answer the questions that follow:**</span>

        histogram(~weight, data = cdc, nint = 3)

    – <span style="color:firebrick;">**(13) How did including the option ```nint = 3``` change the ```histogram```?**</span>

    – <span style="color:firebrick;">**(14) Does setting ```nint = 3``` impact how you would describe the shape, center and spread?**</span>

    – <span style="color:firebrick;">**(15) Try other values for ```nint```. What value produced the best graph? Why?**</span>

###**How often do people text & drive?**
* <span style="color:firebrick;">**(16) Write and run the code to make a graph that shows how often people in our data texted while driving.**</span>

    – <span style="color:firebrick;">**(17) What does the y-axis represent?**</span>

    – <span style="color:firebrick;">**(18) What does the x-axis tell us?**</span>

    – <span style="color:firebrick;">**(19) Would you say that *most* people *never* texted while driving? What does the word *most* mean?**</span>

    – <span style="color:firebrick;">**(20) Approximately what percent of the people texted while driving for 20 or more days?**</span> (Hint: There's 17,232 students in our data.)

###**Does texting and driving differ by sex?**
* <span style="color:firebrick;">**(21) Write and run the codee to make a side-by-side ```bargraph``` that could answer this quesition: *Does texting and driving differ by sex?* Use the following fill-in-the-blank code as a hint.**</span>

        bargraph (~____ , data = ____, groups = ____)

* <span style="color:firebrick;">**(22) Write a sentence explaining how boys and girls differ when it comes to texting while driving.**</span>

* <span style="color:firebrick;">**(23) Would you say that most girls never text and drive? Would you say that most boys never text and drive?**</span>

* <span style="color:firebrick;">**(24) How did including the ```groups``` argument in your code change the graph?**</span>

###**Do males and females have similar heights?**

* To answer this, what we'd like to do is visualize the distributions of heights, separately, for males and females.

    – This way, we can easily compare them.

* <span style="color:firebrick;">**(25) Write and run the code to create a ```histogram``` for the ```height``` of males and females using the ```groups``` argument.**</span>

    – <span style="color:firebrick;">**(26) Can you use this graphic to answer the question at the top of the slide? Why or why not?**</span>

    – <span style="color:firebrick;">**(27) Is grouping numeric values, such as heights, as helpful as grouping categorical variables, such as texting & driving?**</span>

###**Do males and females have similar heights?, continued**
* Why does this work for bargraphs but not histograms?

    – The ```groups``` argument uses color to differentiate between groups.
    
    – With bargraphs, each group is split with bars next to each other on the x-axis.
    
    – With histograms, the x-axis is a continuous set of numbers so the bars overlap making it difficult to compare center and spread.

* <span style="color:firebrick;">**(28) Write and run the code to create a split ```histogram``` to answer the questions below:**</span>

        histogram (~ ____ | ____, data = ____)

* <span style="color:firebrick;">**(29) Do you think males and females have similar heights? Use the plot you create to justify your answer.**</span>

* <span style="color:midnightblue;">**(30) Just like we did for the ```histogram```, is it possible to create a *split* ```bargraph```? Write and run the code to create a ```bargraph``` of ```drive_text``` that is split by ```sex``` to find out.**</span>

###**On your own:**
* In this lab, we looked at the texting & driving habits of boys and girls.

* <span style="color:firebrick;">**(31) What other factors do you think might affect how often people text and drive?** </span>

* <span style="color:firebrick;">**(32) Choose one variable from the ```cdc``` data, make a graph, and use the graph to describe how ```drive_text``` use differs with this variable.**</span>