
!!! warning "Unit 1 Lab Ojectives and Functions:"
        The documentation below lists the functions that will appear in each lab. The lab itself will explain how to use each function. For more examples, refer to the RStudio Lab Codes and Functions file.



### Lab1A

* Objective: Students will learn how to import a pre-loaded dataset onto their Environment Pane and view the data in a spreadsheet. They will understand the importance of syntax and learn the syntax for making plots.

        data(_)
        View(_)
        ?_
        dim(_)
        nrow(_)
        ncol(_)
        names(_)
        bargraph(~x, data)
        histogram(~x, data)
        xyplot(y~x, data)



### Lab1B

* Objective: Students will learn what type of plot is appropriate for a categorical variable versus a numerical variable and will create plots that allow for the comparison of groups.


        str(_)
        histogram(~x, data, nint)
        bargraph(~x, data, groups)
        histogram(~x | y, data)

### Lab1C

* Objective: Students will learn that loading data onto the Enviornment Pane from participatory sensing campaigns uses a different process (export, upload, import).

### Lab1D

* Objective: Students will learn the command to create a dotplot to analyze a numerical variable and how to stack graphs in order to compare their center, shape and spread. They will also learn how to create a new data frame that contains a subset of the food habits data.



        dotPlot( ~x | y, data, nint, cex, layout, main)
        <-, ==, <, >
        filter(data, …)
        head(x)
        tail(x)

### Lab1E

* Objective: Students will learn How to create a scatterplot that uses both faceting and the groups argument as well as how to facet a histogram and dotplot on more than one variable.


        xyplot( y ~ x | u, groups, data)
        histogram(~x | u + v, data)
        dotPlot(~x | u + v, data)


### Lab1F

* Objective: Students will learn how to fix variable names, change the types of variables (ex: string to numeric) and recode categorical variables (ex: number to category).




        rename(data, …)
        as.numeric(x)
        mutate(data, …)
        tally(~x, data)
        recode(x, …)
        save(data, file)
        as.factor(x)

### Lab1G

* Objective: Students will learn how to create two-way frequency tables to detect relationships between categorical variables.




        tally(~y | x, data, format, margin)

### Lab1H

* Objective: Students will learn how to format the timeuse data such that each row represents a typical day for each person in the group
and combine all of the ideas and topics they have learned to find out how their class spends their time.





        timeuse_format(_)