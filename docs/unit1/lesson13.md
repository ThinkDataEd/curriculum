##**<u>Lesson 13: RStudio Basics</u>**

###**Objective:**
Students will learn RStudio/Posit Cloud’s interface, as well as a few basic commands to discover the structure behind
a dataset.

###**Materials:**
1. Computer

2. Projector

3. RStudio: [https://portal.idsucla.org](https://portal.idsucla.org "https://portal.idsucla.org"){:target="_blank"}

4. Video showing how to log into RStudio/Posit Cloud for the first time found **[here](https://www.youtube.com/watch_popup?v=vgh7C8U8Ekk "https://www.youtube.com/watch_popup?v=vgh7C8U8Ekk"){:target="_blank"}**.

###**Vocabulary:**
[pane](../../vocabulary/unit1/#pane "a rectangular area within RStudio"){ .md-button }
[preview](../../vocabulary/unit1/#preview "a pane within RStudio; (spreadsheet) - where they will be able to see the variables and observations (index); rows and columns of data"){ .md-button }
[console](../../vocabulary/unit1/#console "a pane within RStudio; the place where RStudio is waiting for you to tell it what to do, and where it will show the results of a command; you type your codes directly into the console"){ .md-button }
[plot](../../vocabulary/unit1/#plot "a pane within RStudio; where plots/graphs/visualizations will be generated"){ .md-button }
[environment](../../vocabulary/unit1/#environment "a pane within RStudio; where values and objects can be viewed"){ .md-button }

###**RStudio Commands:**
```data( )```, ```View( )```, ```names( )```, ```help( )```, ```dim( )```, ```tally( )```, ```load_labs( )```

###**Essential Concepts:**

!!! note "Essential Concepts:"
    The computer has a syntax, and it can only understand if you speak its language.

!!! warning "Before inviting students to your RStudio/Posit Cloud Teacher Space, ensure that:"
    a) Students sign-in to RStudio/Posit Cloud using the "Log In With Google" option using their school email address.

    b) Each student watches the video showing how to log into RStudio/Posit Cloud for the first time found **[here](https://www.youtube.com/watch_popup?v=vgh7C8U8Ekk "https://www.youtube.com/watch_popup?v=vgh7C8U8Ekk"){:target="_blank"}**.

    c) You are familiar with managing your RStudio/Posit Teacher Space. See video **[here](https://www.youtube.com/watch_popup?v=1bXLsKwY7bY "https://www.youtube.com/watch_popup?v=1bXLsKwY7bY"){:target="_blank"}**.

    d) In preparation for this lesson watch **[this video](https://www.youtube.com/embed/WkxCfaol3pE "https://www.youtube.com/embed/WkxCfaol3pE"){:target="_blank"}**.

###**Lesson:**
1. Inform students that the Dashboard and PlotApp are data visualization tools that are coded in R,
the statistical programming software that academics and professional statisticians use. The
Introduction to Data Science course will utilize RStudio, which also runs on R. They will learn the
programming language of RStudio for data analysis.

2. Demonstrate how to access RStudio/Posit Cloud by projecting the URL: [https://portal.idsucla.org](https://portal.idsucla.org "https://portal.idsucla.org"){:target="_blank"} on a screen.
Then, click on the RStudio (Posit Cloud) icon on the page.

3. Inform students that they will log into RStudio/Posit Cloud using the "Log In with Google" option. Note that this is not the same as their IDS App & IDS Homepage login.

4. Once logged in, show each **pane**, or rectangular area, of the RStudio/Posit Cloud interface:

    100. **preview** (spreadsheet) - where they will be able to see the variables and observations
    (index); rows and columns of data

    100. **console** - where they will be entering their code

    100. **plot** - where their plots/graphs/visualizations will be generated

    100. **environment** - where they will see values and objects

5. Inform students that they will be looking at a dataset from The Centers for Disease Control and
Prevention (CDC), a government agency that collects data about teenagers on a variety of topics.

6. Demonstrate how to load and view the CDC data file to the workspace by typing the following
command in the console:

    **```>data(cdc)```**

    **```>View(cdc)```**

7. Examine the environment pane. Ask a student to describe how the data are displayed. <span style="color:grey">***The data
are displayed in rows and columns.***</span>

8. Demonstrate how to list the variables found in the CDC dataset. Students may take notes and
write down commands in their DS journals:

    100. **```>names(cdc)```**

    100. Ask: What do you notice? What is one variable of this dataset? How many variables are
    there? How does this output compare to the information in the preview pane?  <span style="color:grey">***Answer: This
    command lists the names of each variable in the dataset. There are 32 variables; age, sex, grade, height, weight, etc. Answers will vary about how this output compares to the information in the preview pane.***</span>

9. Demonstrate how to obtain more detailed information about the dataset by typing the following
command in the console

    100. **```>help(cdc)```**

    100. Ask: What unit of measurement is height reported in? <span style="color:grey">***Answer: Height was reported in meters.***</span>

10. Demonstrate how to find the number of rows and columns in the dataset.

    100. **```>dim(cdc)```**

    100. Ask: Which number do you think represents the rows? Which one represents the
    columns? How does this output compare to the information in the preview and
    environment panes? How many observations are there in the dataset? How many
    variables does this dataset contain? <span style="color:grey">***Answer: The first number represents the rows and the second number represents the columns. There are 17,232 rows, or 17,232 observations;
    and there are 32 columns, or 32 variables. This information is also visible in the
    preview pane.***</span>

11. Next, show students how to access the number of observations of a specific variable.

    100. **```>tally(~seat_belt, data = cdc)```**

    100. Ask: What do you notice? Describe the output. <span style="color:grey">***Answer: Notice that six categories are
    displayed. Each category shows the number of observations contained in it. E.g,.
    “Never” has 265 observations, meaning 265 teens reported never wearing their
    seat belt as a passenger in a motor vehicle. &lt;NA> = Not Available, represents teens
    that did not provide information about their seat belt habits.***</span>

12. Change the variable to height.

    100. **```>tally(~height, data = cdc)```**

    100. Ask: What do you notice? Describe the output. <span style="color:grey">***Answer: The levels are missing. It happened
    because the variable 'height' contains numbers, not categories.***</span>

13. Let’s take a closer look at the variables *seat_belt* and *height*. Maximize the console. Ask teams to
discuss the following question:

    What is the difference between the data from the variables *seat_belt* and *height*? <span style="color:grey">***Answer: The
    data from the 'seat_belt' variable is categorical, which means it consists of
    groupings. The data from the variable 'height' is numerical, which means it consists
    of numbers.***</span>

14. Summarize: In data science, the variable *seat_belt* is what we call a **categorical variable**, and
the variable *height* is what we call a **numerical variable**.

15. Let’s look at the other variables in this dataset. In pairs, categorize each variable as categorical
or numerical:

    100. eat_fruit <span style="color:grey">***Answer: categorical***</span>

    100. weight <span style="color:grey">***Answer: numerical***</span>

    100. grade <span style="color:grey">***Answer: categorical***</span>

    100. drive_text <span style="color:grey">***Answer: categorical***</span>

16. Inform students that they will be learning RStudio code to work with data. They will be completing
RStudio labs throughout the course.

17. Demonstrate how to load the menu of labs by typing the following code:

    **```>load_labs( )```**

18. The load labs command displays a list of available labs and a selection prompt. To select Lab 1A,
type number 1 after the selection prompt.

19. Next, direct students’ attention to the plot pane. Show them the location of Lab 1A’s presentation.

20. Click on the arrows at the bottom right-hand side of the presentation to view each slide. Pause on
a slide titled “R’s most important syntax.” There are 3 boxes, each containing a line of code.

21. Explain that every time they see a grey box with a line of code, they are to type the code in the
console. The output will appear either on the console itself or on the plot pane.

22. Type in one of the lines of code. In this particular case, the output will be a plot. Show students
the location of the plot and demonstrate how to toggle between the plots and presentation tabs.

23. Inform students that they will be completing the first lab, 1A, the next day.

###**Class Scribes:**
One team of students will give a brief talk to discuss what they think the 3 most important topics
of the day were.

###<p style="background: black; color: white; text-align: center;">**Homework & Next 3 Days**</p>
Students should continue to collect nutritional facts data using the Food Habits Participatory Sensing
campaign on their smart devices or via web browser.

<center>[<u>***Lab 1A: Data, Code & RStudio***</u>](lab1a.md)</center>

<center>[<u>***Lab 1B: Get the Picture?***</u>](lab1b.md)</center>

<center>[<u>***Lab 1C: Export, Upload, Import***</u>](lab1c.md)</center>

<center>Complete [Labs 1A](lab1a.md), [1B](lab1b.md) and [1C](lab1c.md) prior to [Lesson 14](lesson14.md)</center>