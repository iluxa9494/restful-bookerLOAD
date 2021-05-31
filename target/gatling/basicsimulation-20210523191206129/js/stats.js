var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "452",
        "ko": "548"
    },
    "minResponseTime": {
        "total": "1213",
        "ok": "1213",
        "ko": "4840"
    },
    "maxResponseTime": {
        "total": "17843",
        "ok": "17843",
        "ko": "16962"
    },
    "meanResponseTime": {
        "total": "9154",
        "ok": "7751",
        "ko": "10311"
    },
    "standardDeviation": {
        "total": "3024",
        "ok": "3747",
        "ko": "1463"
    },
    "percentiles1": {
        "total": "10219",
        "ok": "7639",
        "ko": "10343"
    },
    "percentiles2": {
        "total": "10592",
        "ok": "10840",
        "ko": "10584"
    },
    "percentiles3": {
        "total": "13272",
        "ok": "13398",
        "ko": "12930"
    },
    "percentiles4": {
        "total": "15123",
        "ok": "15384",
        "ko": "14260"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 452,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "count": 548,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "22.6",
        "ko": "27.4"
    }
},
contents: {
"req_get-user-reques-a4fef": {
        type: "REQUEST",
        name: "get user request",
path: "get user request",
pathFormatted: "req_get-user-reques-a4fef",
stats: {
    "name": "get user request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "452",
        "ko": "548"
    },
    "minResponseTime": {
        "total": "1213",
        "ok": "1213",
        "ko": "4840"
    },
    "maxResponseTime": {
        "total": "17843",
        "ok": "17843",
        "ko": "16962"
    },
    "meanResponseTime": {
        "total": "9154",
        "ok": "7751",
        "ko": "10311"
    },
    "standardDeviation": {
        "total": "3024",
        "ok": "3747",
        "ko": "1463"
    },
    "percentiles1": {
        "total": "10219",
        "ok": "7639",
        "ko": "10343"
    },
    "percentiles2": {
        "total": "10592",
        "ok": "10840",
        "ko": "10584"
    },
    "percentiles3": {
        "total": "13272",
        "ok": "13398",
        "ko": "12930"
    },
    "percentiles4": {
        "total": "15123",
        "ok": "15384",
        "ko": "14260"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 452,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "count": 548,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "22.6",
        "ko": "27.4"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
