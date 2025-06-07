##**<u>Lesson 15: Tangible Data Merging</u>**

###**Objective:**
Students will learn how to merge two datasets and ask statistical investigative questions about the merged data.

###**Materials:**
1. *Tangible Data Merging* file ([LMR_U2_L15](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 2_v_6.0/LMR_U2_L15.pdf))

    **<u>Advance preparation required:</u>** Needs to be cut into strips (see step 5 of lesson)

2. Copy paper in two colors

    **<u>Advance preparation required:</u>** To distinguish between Dataset 1 & 2 (see step 5 of lesson)

###**Vocabulary:**
[merge](../../vocabulary/unit2/#merge "to come together or combine"){ .md-button }

###**Essential Concepts:**

!!! note "Essential Concepts: "
    We can enhance the context of a statistical problem by merging related datasets
    together. To merge data, each dataset must have a "unique identifier" that tells us how to match up the
    lines of the data.

###**Lesson:**
1. Inform students that they are going to examine the research question "Does the personality color
test really work?" To answer this, we're going to examine whether the different color groups
actually differ on particular beliefs or attitudes, or if these differences might just be due to chance.
In particular, we are going to use the *Stress/Chill* data to see if there is evidence that the "colors"
actually differ.

2. Show students the variables in each of these datasets. Give students time to brainstorm
statistical investigative questions of interest with their teams and record their questions in their DS journals.
Encourage them to think of two- and three-variable questions.

3. Conduct a share out of some of the questions students came up with. <span style="color:grey">***Examples include: (1) Do
people whose predominant color is Gold tend to stress more than people whose
predominant color is Blue? (2) Is there a difference between the sorts of things that stress
out the different personality colors?***</span>

4. In order to answer the above questions, we will need to merge our class’s 2 datasets together
(*Personality Color* and *Stress/Chill*). In order to do this, we will be practicing how to merge datasets today.

5. Print out the material from the *Tangible Data Merging* file ([LMR_U2_L15](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 2_v_6.0/LMR_U2_L15.pdf)). Use a different color of
paper for each of the two datasets. For example, Data Set 1 could be on plain white paper and
Data Set 2 could be on blue paper. Cut the paper by creating horizontal strips of each observation
of data. For example, from the screenshot below, of the first page of Dataset 1, you would create 12 different strips of paper, one
for each observation.
    <div align="right"><iframe src="https://docs.google.com/viewerng/viewer?url=https://curriculum.thinkdataed.org/IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 2_v_6.0/LMR_U2_L15.pdf&embedded=true" style=" width:420px;height:400px;" frameborder="0"></iframe><br>[LMR_U2_L15](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 2_v_6.0/LMR_U2_L15.pdf)</div>


6. Hand each student in the class a strip of paper. Ask them to try to find someone with the other
dataset (i.e., a person with a different colored strip of paper) that they can “match up,” or **merge**,
with.

7. For example, a student with the first row of data listed below from Dataset 1 might want to match
up with the second row of data listed below from Dataset 2 because a person who is 21 has
probably graduated high school.

    |**Birth Month**| **Zip Code**| **Age**| **ID Number**| **Favorite Movie**|
    |--|--|--|--|--|
    |January| 90064| 21| 1742| The Notebook|

    |**Zip Code**| **ID Number**| **Birth Month**| **Siblings**| **Education**|
    |--|--|--|--|--|
    |91331| 1352| August| 2| High School|

8. However, they should notice that they cannot just make guesses about a person’s characteristics
in order to match up the data. They should realize that only 3 of the variables are the same in
both datasets: *Birth Month*, *Zip Code*, and *ID Number*.

    100. Since multiple people have the same *Birth Month*, discuss why this may not be the best
    variable to merge with. <span style="color:grey">***Answer: Multiple people are born in January, so we would have no
    way of differentiating between those people.***</span>

    100. The same is true for the *Zip Codes* variable. Although there are less repeats with *Zip
    Codes*, we still see some overlap between observations.

    100. So, the only *UNIQUE* identifier in both datasets is *ID Number*. So the students should
    end up in pairs at the end of the exercise – a student from Dataset 1 is matched with the
    student from Dataset 2 that has the same *ID Number*.

9. Have the students write about the experience of tangible data merging in their DS journals and
ask:

    100. Why is it important to have at least one unique identifier for both datasets? <span style="color:grey">***Answer: It is the only
    way to know which information belongs to which person. We want to make sure we
    do not match up observations (in this case, people) incorrectly because that will
    compromise any analysis we do later.***</span>

10. Inform students that they will learn to merge datasets using RStudio during the next lab.

###**Class Scribes:**
One team of students will give a brief talk to discuss what they think the 3 most important topics of the
day were.

###<p style="background: black; color: white; text-align: center;">**Homework & Next Day**</p>
Students will collect data for one more day for the *Stress/Chill* campaign either through the [IDS
ThinkData Ed App](../download/app.md) or via web browser at [https://portal.thinkdataed.org](https://portal.thinkdataed.org "https://portal.thinkdataed.org"){:target="_blank"}

<center>[<u>***LAB 2G: Getting it Together***</u>](lab2g.md)</center>

<center>Complete [Lab 2G](lab2g.md) prior to the [Practicum](practicum3.md).</center>