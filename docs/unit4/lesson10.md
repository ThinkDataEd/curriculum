##***<u>Lesson 10: What's the Best Line?</u>***

###**Objective:**
Students will understand that the mean squared error (MSE) is a way to assess the fit of a linear model. The MSE measures the total squared distances between all the data values from the line of best fit and divides it by the number of observations in the dataset.

###**Materials:**
1. *Arm Span vs. Height* Scatterplot ([LMR_4.9_Arm Span vs Height](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.9_Arm Span vs Height.pdf)) from [lesson 8](lesson8.md)

2. *Testing Line of Best Fit* handout ([LMR_4.11_Testing Line of Best Fit](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.11_Testing Line of Best Fit.pdf))

###**Vocabulary:**
regression line, observed values, predicted values

###**Essential Concepts:**

!!! note "Essential Concepts: "
    The regression line can be used to make good predictions about values of *y* for any given
    value of *x*. This works for exactly the same reason the mean works well for one variable: the predictions will
    make your score on the mean squared errors as small as possible.

###**Lesson:**
1. Reveal the equation of the line of best fit for the Arm Span vs. Height data and ask students to
check their equations from the homework assignment:

    <center><img src="https://latex.codecogs.com/gif.latex?\widehat{height}=0.7328(armspan)&plus;17.4957" title="\widehat{height}=0.7328(armspan)+17.4957" /></center>

    **<u>Note:</u>** Any time a *hat* is on top of a variable, this means we are making “predicted values” of that
    variable.

2. Whose equation came closest to the equation of the regression line? Ask the student whose
equation came closest to share how he/ she came up with the equation.

3. Inform students that the equation of the line is a rule that predicts the height based on a second
variable, in this case, arm span.

4. Team discussion question:

    **Using the equation of the line of best fit provided, how can we predict the height of
    a student whose arm span is 67 inches?**

5. Let students know that lines of best fit are also known as **regression lines** and they are models that
can be used to make predictions.

6. Inform students that data scientists have a way of finding the best line. They choose the line so that the mean squared distances between the points and the line is as small as possible. Discuss with students:

    100. What methods have we used so far? <span style="color:grey">***Answer: We've used Mean Squared Error and Mean Absolute Error [lesson 7](lesson7.md)***</span>

    100. When is it appropriate to use each method? <span style="color:grey">***Answer: It was best ot use Mean Squared Error when we were looking at mean and Mean Absolute Error when we were looking at median.***</span>

7. [See graphic below] Students will calculate the distances and squares of two
different points and their predictions so that they can understand what it means. Data points are **observed values** and points on the line are **predicted values**.
<img src="../../img/40908.png" />

###**Class Scribes:**
One team of students will give a brief talk to discuss what they think the 3 most important topics of the
day were.

###<p style="background: black; color: white; text-align: center;">**Homework & Next 2 Days**</p>
[<u>***LAB 4B:…***</u>](lab4b.md)

[<u>***LAB 4C:***</u>](lab4c.md)

Complete [Labs 4B](lab4b.md) and [4C](lab4c.md) prior to [Lesson 11](lesson11.md).