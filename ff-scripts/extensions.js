var ff = require("ffef/FatFractal");

function Person(obj) {
    this.clazz = "Person";
    this.firstName = null;
    this.lastName = null;
    this.gender = null;
    this.mother = null;
    this.father = null;
    this.siblings = null;
    this.picture = null;
    if(obj) {
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.gender = obj.gender;
        this.mother = obj.mother;
        this.father = obj.father;
        this.siblings = obj.siblings;
        this.picture = obj.picture;
    }
    return this;
}

exports.cleanup = function() {
    var persons = ff.getArrayFromUri("/Persons");
    if (persons == null) return;
    for (var i = 0; i < persons.length; i++) {
        ff.deleteObj(persons[i]);
    }
    var r = ff.response();
    r.result = "<h1> Thanks for visiting</h1><p>We have deleted  " + persons.length + " objects from the tests.</p>";
    r.responseCode="200";
    r.statusMessage = "cleanup has deleted " + persons.length + " objects from your backend.";
    r.mimeType = "text/html";
}

exports.populate = function() {
    // create the Person objects
    var abraham = ff.getObjFromUri("/Persons/(firstName eq 'Abraham')");
    print("Abraham is: " + abraham);
    if(!abraham) {
        abraham = new Person();
        abraham.firstName = "Abraham";
        abraham.lastName = "Simpson";
        abraham.gender = "Male";
        abraham = ff.createObjAtUri(abraham, "/Persons", "system");
        print("created Abraham");
    }
    var mona = ff.getObjFromUri("/Persons/(firstName eq 'Mona')");
    if(!mona) {
        mona = new Person();
        mona.firstName = "Mona";
        mona.lastName = "Simpson";
        mona.gender = "Female";
        mona = ff.createObjAtUri(mona, "/Persons", "system");
        print("created Mona");
    }
    var clancy = ff.getObjFromUri("/Persons/(firstName eq 'Clancy')");
    if(!clancy) {
        clancy = new Person();
        clancy.firstName = "Clancy";
        clancy.lastName = "Bouvier";
        clancy.gender = "Male";
        clancy = ff.createObjAtUri(clancy, "/Persons", "system");
        print("created Abraham");
    }
    var jackie = ff.getObjFromUri("/Persons/(firstName eq 'Jackie')");
    if(!jackie) {
        jackie = new Person();
        jackie.firstName = "Jackie";
        jackie.lastName = "Bouvier";
        jackie.gender = "Female";
        jackie = ff.createObjAtUri(jackie, "/Persons", "system");
    }
    var herb = ff.getObjFromUri("/Persons/(firstName eq 'Herb')")
    if(!herb) {
        herb = new Person();
        herb.firstName = "Herb";
        herb.lastName = "Simpson";
        herb.gender = "Male";
        ff.addReferenceToObj(abraham.ffUrl, "father", herb)
        ff.addReferenceToObj(mona.ffUrl, "mother", herb)
        herb = ff.createObjAtUri(herb, "/Persons", "system");
    }
    var homer = ff.getObjFromUri("/Persons/(firstName eq 'Homer')")
    if(!homer) {
        homer = new Person();
        homer.firstName = "Homer";
        homer.lastName = "Simpson";
        homer.gender = "Male";
        ff.addReferenceToObj(abraham.ffUrl, "father", homer)
        ff.addReferenceToObj(mona.ffUrl, "mother", homer)
        homer = ff.createObjAtUri(homer, "/Persons", "system");
    }
    ff.grabBagAdd(homer.ffUrl, herb.ffUrl, "siblings")
    ff.grabBagAdd(herb.ffUrl, homer.ffUrl, "siblings")
    var marge = ff.getObjFromUri("/Persons/(firstName eq 'Marge')");
    if(!marge) {
        marge = new Person();
        marge.firstName = "Marge";
        marge.lastName = "Simpson";
        marge.gender = "Female";
        ff.addReferenceToObj(clancy.ffUrl, "father", marge)
        ff.addReferenceToObj(jackie.ffUrl, "mother", marge)
        marge = ff.createObjAtUri(marge, "/Persons", "system");
    }
    var patty = ff.getObjFromUri("/Persons/(firstName eq 'Patty')");
    if(!patty) {
        patty = new Person();
        patty.firstName = "Patty";
        patty.lastName = "Simpson";
        patty.gender = "Female";
        ff.addReferenceToObj(clancy.ffUrl, "father", patty)
        ff.addReferenceToObj(jackie.ffUrl, "mother", patty)
        patty = ff.createObjAtUri(patty, "/Persons", "system");
    }
    var selma = ff.getObjFromUri("/Persons/(firstName eq 'Selma')");
    if(!selma) {
        selma = new Person();
        selma.firstName = "Selma";
        selma.lastName = "Simpson";
        selma.gender = "Female";
        ff.addReferenceToObj(clancy.ffUrl, "father", selma)
        ff.addReferenceToObj(jackie.ffUrl, "mother", selma)
        selma = ff.createObjAtUri(selma, "/Persons", "system");
    }
    ff.grabBagAdd(marge.ffUrl, patty.ffUrl, "siblings")
    ff.grabBagAdd(selma.ffUrl, patty.ffUrl, "siblings")
    ff.grabBagAdd(patty.ffUrl, marge.ffUrl, "siblings")
    ff.grabBagAdd(selma.ffUrl, marge.ffUrl, "siblings")
    ff.grabBagAdd(marge.ffUrl, selma.ffUrl, "siblings")
    ff.grabBagAdd(patty.ffUrl, selma.ffUrl, "siblings")
    var bart = ff.getObjFromUri("/Persons/(firstName eq 'Bart')");
    if(!bart) {
        bart = new Person();
        bart.firstName = "Bart";
        bart.lastName = "Simpson";
        bart.gender = "Male";
        ff.addReferenceToObj(homer.ffUrl, "father", bart)
        ff.addReferenceToObj(marge.ffUrl, "mother", bart)
        bart = ff.createObjAtUri(bart, "/Persons", "system");
    }
    var lisa = ff.getObjFromUri("/Persons/(firstName eq 'Lisa')");
    if(!lisa) {
        lisa = new Person();
        lisa.firstName = "Lisa";
        lisa.lastName = "Simpson";
        lisa.gender = "Female";
        ff.addReferenceToObj(homer.ffUrl, "father", lisa)
        ff.addReferenceToObj(marge.ffUrl, "mother", lisa)
        lisa = ff.createObjAtUri(lisa, "/Persons", "system");
    }
    var maggie = ff.getObjFromUri("/Persons/(firstName eq 'Maggie')");
    if(!maggie) {
        maggie = new Person();
        maggie.firstName = "Maggie";
        maggie.lastName = "Simpson";
        maggie.gender = "Female";
        ff.addReferenceToObj(homer.ffUrl, "father", maggie)
        ff.addReferenceToObj(marge.ffUrl, "mother", maggie)
        maggie = ff.createObjAtUri(maggie, "/Persons", "system");
    }
    ff.grabBagAdd(lisa.ffUrl, bart.ffUrl, "siblings")
    ff.grabBagAdd(maggie.ffUrl, bart.ffUrl, "siblings")
    ff.grabBagAdd(bart.ffUrl, lisa.ffUrl, "siblings")
    ff.grabBagAdd(maggie.ffUrl, lisa.ffUrl, "siblings")
    ff.grabBagAdd(bart.ffUrl, maggie.ffUrl, "siblings")
    ff.grabBagAdd(lisa.ffUrl, maggie.ffUrl, "siblings")
    var ling = ff.getObjFromUri("/Persons/(firstName eq 'Ling')");
    if(!ling) {
        ling = new Person();
        ling.firstName = "Ling";
        ling.lastName = "Bouvier";
        ling.gender = "Female";
        ff.addReferenceToObj(selma.ffUrl, "mother", ling)
        ling = ff.createObjAtUri(ling, "/Persons", "system");
    }
    // add in grabbags
    ff.grabBagAdd(herb.ffUrl, homer.ffUrl, "siblings")

    var r = ff.response();
    r.result = "<h1> Thanks for visiting</h1><p>We have populated the data objects for the tests.</p>";
    r.responseCode="200";
    r.statusMessage = "populate has created the data objects to your backend.";
    r.mimeType = "text/html";
}
