var Template = function(copyFrom, copyTo) {
    this.template;
    this.clone;
    this.copyFrom = copyFrom;
    this.copyTo = copyTo;


    this.cloneElement = function(copyFrom) {
        this.template = document.getElementById(copyFrom);
        this.clone = this.template.content.cloneNode(true);
    };

    this.replace = function(newItems) {
        this.cloneElement(this.copyFrom);

        for (let count = 0; count < newItems.length; count++) {
            this.clone.getElementById('template_text_' + count).innerHTML = newItems[count];
        }

        return this;
    };

    this.addClass = function(id, addClass) {
        var element = this.clone.getElementById(id);
        element.classList.add(addClass);

        return this;
    };

    this.add = function() {
        document.getElementById(this.copyTo).appendChild(this.clone);
    };
}
