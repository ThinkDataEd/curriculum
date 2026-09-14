extra datasets

### atus

!!! abstract "atus_2020"
      extra_data('atus_2020')

### cdc_2019

!!! abstract "cdc_2019"
      extra_data('cdc_2019')

### colors_ids

!!! abstract "colors_ids"
      extra_data('colors_ids')

      #If you'd like to merge this dataset with your class, follow these steps: <br>
      #Create a subset colors_class of your class data without the variables <br>
      # of latitude and longitude <br>
      #This assumes your class data is named p6_colors
      
      colors_class <- subset(p6_colors, select = -c(latitude, longitude)) <br>
      #bring in colors_ids dataset from IDS archive <br>
      extra_data('colors_ids') <br>
      
      #row bind the 2 datasets together <br>
      colors_full <- rbind(colors_class, colors_ids)

### food_ids

!!! abstract "food_ids"
      extra_data('food_ids')

      #If you'd like to merge this dataset with your class, follow these steps:
      
      food_class <- subset(p6_food, select = -c(latitude, longitude)) <br>
      extra_data('food_ids') <br>
      food_full <- rbind(food_class, food_ids)

### hiring

!!! abstract "hiring"
      extra_data('hiring')

### retail

!!! abstract "retail"
      extra_data('retail')
      
### stresschill_ids

!!! abstract "stresschill_ids"
      extra_data('stresschill_ids')

      #If you'd like to merge this dataset with your class, follow these steps: 

      stresschill_class <- subset(p6_stress, select = -c(latitude, longitude)) <br>
      extra_data('stresschill_ids') <br>
      stresschill_full <- rbind(stresschill_class, stresschill_ids)

### time_exp

!!! abstract "time_exp"
      extra_data('time_exp')
      
      #If you'd like to merge this dataset with your class, follow these steps: 

      time_class <- subset(p6_time, select = -c(latitude, longitude)) <br>
      extra_data('time_exp') <br>
      time_full <- rbind(time_class, time_exp)  

### timeuse_ids

!!! abstract "timeuse_ids"
      extra_data('timeuse_ids')

      #If you'd like to merge this dataset with your class, follow these steps: 

      timeuse_class <- subset(p6_timeuse, select = -c(latitude, longitude)) <br>
      extra_data('timeuse_ids') <br>
      timeuse_full <- rbind(timeuse_class, timeuse_ids)
