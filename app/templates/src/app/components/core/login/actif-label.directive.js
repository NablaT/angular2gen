/**
 * Created by guillaume on 21/02/2016.
 */

export class ActifLabelDirective {

    constructor () {
        'ngInject';
        this.restrict = 'A';
    }

    link (scope, element) {

        /**
         * This is a listener for a keyup event.
         */
        element.keyup(
            /**
             * This function is triggered when a keyup event occurs.
             * This function :
             * <ul>
             *     <li>adds the 'active' class on the label element when the input value is different from ''</li>
             *     <li>Removes the 'active' class on the label element when the input value is ''</li>
             * </ul>
             */
            function () {
                let label = element.find('label');
                if (element.find('input')[0].value === '') {
                    label.removeClass('active');
                } else {
                    label.addClass('active');
                }

            })
    }

}