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
    var values = [];
    var functions = [];
    $(".sc2").html("<p>0</p>")
    $(".gr").click(function(){
        number1 = number2;
        number2 = number1*10 + $(this).text()*1;
        $(".sc2").html("<p>"+number2+"</p>")
    $("#clear").click(function(){
        number1 = 0;
        number2 = 0;
        values = [];
        functions = [];
        $(".sc2").html("<p>0</p>")
    $("#negative").click(function(){
        number1 = number2;
        number2 = number1*-1;
        $(".sc2").html("<p>"+number2+"</p>")
        alert("yay");
    $("#percent").click(function(){
        number1 = number2;
        number2 = number1/100;
        $(".sc2").html("<p>"+number2+"</p>")
    // $("#nine").click(function(){
    //     var value1 = 10*value1+9
    //     $(".sc2").html("<p>"+value1+"</p>")
    // $("#times").click(function(){
    //     functions.push("*");
    //     $(".sc2").html("<p>x</p>")

    });
    });
    });
    });

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