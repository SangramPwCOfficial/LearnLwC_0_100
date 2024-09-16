/**
 * @description       : 
 * @author            : Sangram Keshari Upadhyaya
 * @group             : 
 * @last modified on  : 02-09-2024
 * @last modified by  : Sangram Keshari Upadhyaya
 * Modifications Log
 * Ver   Date         Author                      Modification
 * 1.0   02-09-2024   Sangram Keshari Upadhyaya   Initial Version
**/
import { LightningElement, api } from 'lwc';

export default class MyfirstComponent extends LightningElement {
    
    // local property
    name = 'Sangram Keshari Upadhyaya';
    age = 24;
    showData = false;
    details = {
        username : 'Sangram99',
        company : 'PwC',
        roles : 'DevOps'
    }
    userList = ['Harish', 'Raghav', 'Sukesh'];

    // data binding :: It is the syncronization between the controller and the template(HTML).
    // controller --> template

    fname = 'Sangram';

    // Things to remember :: 
    //      -- In template we can access property value directly if it's a primitive or object.
    //      -- Dot notation is used to access the property from an object.
    //      -- LwC doesn't allow computated expression like Names[2] or {2+2}
    //      -- The property in { } must be a valid JavaScript identifier or member expression. Like {name} or {user.name}.
    //      -- Avoid adding spaces around the property, for example, { data }

    // two-way data binding ::
    // template <> controller

    role;
    handleTitleChange(event){
        this.role = event.target.value;
    }
}