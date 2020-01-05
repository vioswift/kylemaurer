var Template = function(copy_from, copy_to) {
    this.template;
    this.clone;
    this.copy_from = copy_from;
    this.copy_to = copy_to;

    this.cloneElement = function(copy_from) {
        this.template = document.getElementById(copy_from);
        this.clone = this.template.content.cloneNode(true);
    };

    this.replace = function(new_items) {
        this.cloneElement(this.copy_from);

        for (let count = 0; count < new_items.length; count++) {
            this.clone.getElementById('template_id_' + count).innerHTML = new_items[count];
        }

        return this;
    };

    this.replaceId = function(new_items) {
        for (let count = 0; count < new_items.length; count++) {
            this.clone.getElementById('template_id_' + count).id = new_items[count];
        }

        return this;
    };

    this.changeLink = function(id, link) {
        var element = this.clone.getElementById(id);
        element.href = link;
        
        return this;
    };

    this.addClass = function(id, add_class) {
        var element = this.clone.getElementById(id);
        element.classList.add(add_class);

        return this;
    };

    this.add = function() {
        document.getElementById(this.copy_to).appendChild(this.clone);
    };
}
