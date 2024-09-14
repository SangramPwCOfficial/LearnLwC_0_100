/**
 * @description       : 
 * @author            : Sangram Keshari Upadhyaya
 * @group             : 
 * @last modified on  : 13-09-2024
 * @last modified by  : Sangram Keshari Upadhyaya
 * Modifications Log
 * Ver   Date         Author                      Modification
 * 1.0   06-09-2024   Sangram Keshari Upadhyaya   Initial Version
**/
import { LightningElement, track } from 'lwc';

export default class Lwc_trackProperty extends LightningElement {
    
    /* @track Property */

    /*
    
    When a field contains an object or an array, there's a limit to the depth of changes that can be tracked. To tell the framework to observe changes to
    the properties of an object or to the elements of an array, decorate the field with @track.

    */
    
    /* Normal Property vs @track Property */

    /*
    
    Without using @track, the framework observes changes that assign a new value to a field/property. If the new value is not === to the previous value, the
    component re-renders. 
    
    */

    fullname = 'Sangram Upadhyaya';

    // If @track is removed the value received from UI will not get updated.
    @track
    address = {

        street: 'Aparthibindha',
        city: 'Bhadrak',
        state: 'Odisha',
        zip: '756100'
        
    }

    addressLine = {

        street: 'Jagannathpur',
        city: 'Bhadrak',
        state: 'Odisha',
        zip: '756101'
        
    }

    handleCityChange(event){
        this.address.city = event.target.value;
    }

    handleStreetChange(event){
        this.address.street = event.target.value;
    }

    handleStateChange(event){
        this.address.state = event.target.value;
    }

    handleZipChange(event){
        this.address.zip = event.target.value;
    }

    // Without @track

    handleAddessCityChange(evt){
        this.addressLine = {...this.addressLine, 'city' : evt.target.value};
    }

}