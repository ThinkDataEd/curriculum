##**<u>Lab 1H - Our Time</u>**

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**We've come a long way**

* The labs until now have covered a huge range of topics:

    – We've learned how to make plots for different types of variables.

    – We know how to subset our data to get a more refined view of our data.

    – We've covered cleaning data and making two-way frequency tables.

* In this lab, we're going to combine all of these ideas and topics together to find out how we spend out time.

###**First steps first.**

* <span style="color:midnightblue;">***Export, Upload, Import*  the data from your class’ *Time Use* campaign.**</span>

* The data, as-is, is very messy and hard to interpret/analyze.

    – <span style="color:midnightblue;">**Fill in the blank with the name of your imported data to format it:**</span>

        timeuse <- timeuse_format( ______ )

* This function formats/cleans the data so that each row represents a typical day for each student in the class

* <span style="color:midnightblue;">**Hint: Search your *History* tab for the code to save your formatted ```timeuse``` data as an ```R``` data file (.Rda)**</span>

###**timeuse_format specifics**

* In case you're wondering, the ```timeuse_format``` function:

    – Takes each student's daily data and adds up all of the time spent doing each activity for each day.

    – The time spent on each activity for each day is then averaged together to create a *typical day* in the life of each student.

###**Exploring your data**

* Start by getting familiar with your ```timeuse``` data:

    – <span style="color:firebrick;">**How many observations and variables are there?**</span>

    – <span style="color:firebrick;">**What are the names of the variables?**</span>

    – <span style="color:firebrick;">**Which row represents YOUR *typical day*?**</span>

###**How do we spend our time?**

* We would like to investigate the *research question*: "How did our class spend our time?"

    – To do this, we'll perform a statistical investigation.

* <span style="color:firebrick;">**State and answer two statistical questions based on our *research question*.**</span>

    – <span style="color:firebrick;">**Also, state one way in which your personal data is *typical* and one way that it *differs* from the rest of the class.**</span>

* <span style="color:firebrick;">**Justify your answers by using appropriate statistical graphics and summary tables.**</span>

    – <span style="color:firebrick;">**If you subset your data, explain why and how it benefited your analysis.**</span>
