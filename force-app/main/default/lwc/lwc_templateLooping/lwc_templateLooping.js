/**
 * @description       : 
 * @author            : Sangram Keshari Upadhyaya
 * @group             : 
 * @last modified on  : 16-09-2024
 * @last modified by  : Sangram Keshari Upadhyaya
 * Modifications Log
 * Ver   Date         Author                      Modification
 * 1.0   15-09-2024   Sangram Keshari Upadhyaya   Initial Version
**/
import { LightningElement } from 'lwc';

export default class Lwc_templateLooping extends LightningElement {

    /****** Template Looping ******/

    /*
    
    There are many scenarios in which we have to render the same set of elements with mostly same styling with different data in the HTML.
    To solve this issue, we have template looping in LwC.

    Template Looping Types ::
    
    - forEach        
        The template loop always works on the array not on object or anything else.

        Syntax ::

        <template for:each={array} for:item="currentItem" for:index="index">
            <div key={item.id} class="slds-box slds-box_x-small slds-m-around_small">
                <p>{item.name}</p>
            </div>
        </template>

        ---------------------------------------------------------------------------------------------------------------
        |        Attribute              |                                  Description                                |
        ---------------------------------------------------------------------------------------------------------------
        |    for:each={array}           |  for:each takes the array, as an input                                      |
        |-------------------------------|-----------------------------------------------------------------------------|
        |    for:item="currentItem"     |  for:item takes the current item in the array as an input                   |
        |-------------------------------|-----------------------------------------------------------------------------|
        |    key={item.id}              |  key takes the unique key of the current item in the array as an input      |
        |-------------------------------|-----------------------------------------------------------------------------|
        |    for:index="index"          |  index is the current element index in the array. for:index holds the index |
        |-------------------------------|-----------------------------------------------------------------------------|                                                                                                   
    
        What is key & it's importance ?

        - A key is a special string attribute that we need to include to the first element inside the template when creating lists of elements.
        - Keys help the LWC engine identify which items have changed, are added, or are removed.
        - The best way to pick a key is to use a string that uniquely identifies a list item amonng it's siblings.

        NOTE :: 

        - Key must be a number or string, it can't be an object.
        - We can't use the index as a value for the key. 

    - iterator
        To apply a special behaviour to the first or the last item of a list , we can use the iterator.

        Syntax ::

        <template iterator:iteratorName={array}>
            <div key={iteratorName.id} class="slds-box slds-box_x-small slds-m-around_small">
                <p>{iteratorName.name}</p>
            </div>
        </template>
        
        ---------------------------------------------------------------------------------------------------------------
        |        Attribute              |                                  Description                                |
        ---------------------------------------------------------------------------------------------------------------
        |        iterator               |  it's a keyword to tell template that it's an iterator loop                 |
        |-------------------------------|-----------------------------------------------------------------------------|
        |      iteratorName             |  iteratorName is the value of the current element in the loop.              |
        |                               |  iteratorName is an alias and can be anyname                                |
        |-------------------------------|-----------------------------------------------------------------------------|
        |           array               |  array is the data on which we want to apply loop                           |
        |-------------------------------|-----------------------------------------------------------------------------|

        Properties of Iterator ::

        Using iterator name we can access the following properties:

        - value : The value of the item in the list. Use this property to access the properties of the array.
            
            syntax ::

            iteratorName.value.propertyName

        - index : The index of the item in the list.

            syntax ::

            iteratorName.index

        - first : A boolean value that tells if the item is the first item in the list.

            syntax ::

            iteratorName.first

        - last : A boolean value that tells if the item is the last item in the list.

            syntax ::

            iteratorName.last

    */

    employeeList = [{
        'UID' : 98789,
        'Name' : 'Lokesh',
        'Age' : 26,
        'City' : 'Hyderabad'
    },{
        'UID' : 98791,
        'Name' : 'Sachin',
        'Age' : 23,
        'City' : 'Hyderabad'
    },{
        'UID' : 98792,
        'Name' : 'Suresh',
        'Age' : 22,
        'City' : 'Bangalore'
    },{
        'UID' : 98793,
        'Name' : 'Sangram',
        'Age' : 25,
        'City' : 'Bangalore'
    }];

    carListModel = ['Ford', 'Daihatsu', 'Hyundai', 'Toyota'];

    carList = [
    {
        'Brand' : 'Ford',
        'Price' : 10.5,
        'Color' : 'Black',
        'Seller' : 'Sangram'
    },{
        'Brand' : 'Daihatsu',
        'Price' : 15.5,
        'Color' : 'Black',
        'Seller' : 'Lokesh'
    },{
        'Brand' : 'Hyundai',
        'Price' : 20.5,
        'Color' : 'Black',
        'Seller' : 'Suresh'
    },{
        'Brand' : 'Toyota',
        'Price' : 25.5,
        'Color' : 'Black',
        'Seller' : 'Sangram'
    }];


    
}