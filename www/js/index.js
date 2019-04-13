/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 $(document).ready(function(){
    var number1 = 0;
    var number2 = 0;
    var ptemp = 0;
    var stemp = 0;
    var mtemp = 0;
    var dtemp = 0;
    // var solveval = 0;
    // var values = [];
    // var functions = [];
    // function solve(){
    //     for (x = functions.length; x > 0; x--){
    //         if(functions[x]==x){
    //             solveval = (values[(values.length)-1]*1)*(values[(values.length)-2]*1)
    //             values.slice(-1,-2)
    //             values.push(solveval)
    //         }
    //         if(functions[x]==d){
    //             solveval = (values[(values.length)-1]*1)/(values[(values.length)-2]*1)
    //             values.slice(-1,-2)
    //             values.push(solveval)
    //         }
    //         if(functions[x]==p){
    //             solveval = (values[(values.length)-1]*1)+(values[(values.length)-2]*1)
    //             values.slice(-1,-2)
    //             values.push(solveval)
    //         }
    //         if(functions[x]==m){
    //             solveval = (values[(values.length)-1]*1)-(values[(values.length)-2]*1)
    //             values.slice(-1,-2)
    //             values.push(solveval)
    //         }
    //     }
    // }
    $(".sc2").html("<p>0</p>")
    $(".gr").click(function(){
        number1 = number2;
        number2 = number1*10 + $(this).text()*1;
        $(".sc2").html("<p>"+number2+"</p>")
        });
    $("#clear").click(function(){
        number1 = 0;
        number2 = 0;
        ptemp = 0;
        mtemp = 0;
        values = [];
        functions = [];
        $(".sc2").html("<p>0</p>")
        });
    $("#negative").click(function(){
        number1 = number2;
        number2 = 0-number1;
        $(".sc2").html("<p>"+number2+"</p>")
        });
    $("#percent").click(function(){
        number1 = number2;
        number2 = number1/100;
        $(".sc2").html("<p>"+number2+"</p>")
        });
    $("#divide").click(function(){
        number1 = number2;
        number2 = 0-number1;
        $(".sc2").html("<p>"+number2+"</p>")
        });
    $("#times").click(function(){
        number1 = number2;
        number2 = *number1;
        $(".sc2").html("<p>"+number2+"</p>")
        });
    $("#minus").click(function(){
        number1 = number2;
        if(stemp>0){
            number2 = stemp-number1;}
        else if(mtemp>0){
            number2 = mtemp*number1}
        else if(ptemp>0){
            number2 = number1+ptemp;}
        else if(dtemp>0){
            number2 = dtemp/number1}
        ptemp = 0
        stemp = 0
        mtemp = 0
        dtemp = 0
        stemp = number2;
        number2 = 0
        $(".sc2").html("<p>"+mtemp+"</p>")
        });
    $("#plus").click(function(){
        number1 = number2;
         if(stemp>0){
        number2 = stemp-number1;}
        else{
            number2 = number1+ptemp;}
        stemp = 0
        ptemp = number2;
        number2 = 0
        $(".sc2").html("<p>"+ptemp+"</p>")

        });
    $("#equals").click(function(){
        number1 = number2;
         if(mtemp>0){
        number2 = mtemp-number1;}
        else{
            number2 = number1+ptemp;}
        ptemp = 0
        mtemp=0
        $(".sc2").html("<p>"+number2+"</p>")
    })

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
});