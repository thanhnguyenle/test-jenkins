var $jscomp = {
	scope: {}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(d, h, p) {
	if (p.get || p.set) throw new TypeError("ES3 does not support getters and setters.");
	d != Array.prototype && d != Object.prototype && (d[h] = p.value)
};
$jscomp.getGlobal = function(d) {
	return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
	$jscomp.initSymbol = function() {};
	$jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function(d) {
	return $jscomp.SYMBOL_PREFIX + (d || "") + $jscomp.symbolCounter_++
};
$jscomp.initSymbolIterator = function() {
	$jscomp.initSymbol();
	var d = $jscomp.global.Symbol.iterator;
	d || (d = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
	"function" != typeof Array.prototype[d] && $jscomp.defineProperty(Array.prototype, d, {
		configurable: !0,
		writable: !0,
		value: function() {
			return $jscomp.arrayIterator(this)
		}
	});
	$jscomp.initSymbolIterator = function() {}
};
$jscomp.arrayIterator = function(d) {
	var h = 0;
	return $jscomp.iteratorPrototype(function() {
		return h < d.length ? {
			done: !1,
			value: d[h++]
		} : {
			done: !0
		}
	})
};
$jscomp.iteratorPrototype = function(d) {
	$jscomp.initSymbolIterator();
	d = {
		next: d
	};
	d[$jscomp.global.Symbol.iterator] = function() {
		return this
	};
	return d
};
$jscomp.makeIterator = function(d) {
	$jscomp.initSymbolIterator();
	var h = d[Symbol.iterator];
	return h ? h.call(d) : $jscomp.arrayIterator(d)
};
"undefined" == typeof MyProfileHandler && (MyProfileHandler = {});
(function() {
	function d() {
		$j("#securityPopWrapper").on("keydown", function(a) {
			KeyEventUtils.keyCode(a).isEnter && MyProfileHandler.resetSecurityCode()
		});
		$j("#passwordPopWrapper").on("keydown", function(a) {
			KeyEventUtils.keyCode(a).isEnter && MyProfileHandler.resetPassword()
		});
		$j("#oldOtpKey").keydown(function(a) {
			return KeyEventUtils.keyCode(a).isEnter ? (MyProfileHandler.resetOtp(), !1) : !0
		});
		$j("#securityCode").keydown(function(a) {
			return KeyEventUtils.keyCode(a).isEnter ? (MyProfileHandler.resetSecurityCode(),
				!1) : !0
		})
	}

	function h() {
		if (PageConfig.isShowTopWinLoseArea) {
			var a = parseFloat(CookieUtil.getCookie("turnoverFilter")),
				b = parseFloat(CookieUtil.getCookie("winloseFilter"));
			isNaN(a) || ($j("#turnoverFilterA").html(a), $j("#turnoverFilter").val(a));
			isNaN(b) || ($j("#winloseFilterA").html(b), $j("#winloseFilter").val(b))
		}
	}

	function p(a) {
		var b = [],
			c = [],
			e = [];
		$j.each(a, function(a, f) {
			0 != f.userType ? 0 < f.suspended && 0 == f.locked ? c[f.userLevel] = (c[f.userLevel] || 0) + f.accountCount : 0 < f.locked ? e[f.userLevel] = (e[f.userLevel] ||
				0) + f.accountCount : b[f.userLevel] = (b[f.userLevel] || 0) + f.accountCount : 0 < f.suspended && 0 == f.locked ? c[0] = (c[0] || 0) + f.accountCount : 0 < f.locked ? e[0] = (e[0] || 0) + f.accountCount : b[0] = (b[0] || 0) + f.accountCount
		});
		for (a = 1; a < PageConfig.userTypes.length; a++) {
			var d = PageConfig.userTypes[a];
			if (d) {
				b[a] = b[a] || 0;
				c[a] = c[a] || 0;
				e[a] = e[a] || 0;
				var g = NumberFormatUtil.formatNumber(b[a] + c[a] + e[a], 0, ""),
					k = NumberFormatUtil.formatNumber(c[a], 0, ""),
					l = NumberFormatUtil.formatNumber(e[a], 0, ""),
					f = NumberFormatUtil.formatNumber(b[a], 0, ""),
					g = g + '\x3cdiv class\x3d"d-flex"\x3e\x3cdiv class\x3d"txt-user"\x3e' + f + '\x3cspan class\x3d"tooltip"\x3eActive\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"txt-user lock"\x3e' + l + '\x3cspan class\x3d"tooltip"\x3eLock\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"txt-user suspended"\x3e' + k + '\x3cspan class\x3d"tooltip"\x3eSuspended\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e';
				$j("#total" + d).html(g)
			}
		}
		b[0] = b[0] || 0;
		c[0] = c[0] || 0;
		e[0] = e[0] || 0;
		g = NumberFormatUtil.formatNumber(b[0] + c[0] + e[0], 0, "");
		k = NumberFormatUtil.formatNumber(c[0],
			0, "");
		l = NumberFormatUtil.formatNumber(e[0], 0, "");
		f = NumberFormatUtil.formatNumber(b[0], 0, "");
		a = g + '\x3cdiv class\x3d"d-flex"\x3e\x3cdiv class\x3d"txt-user"\x3e' + f + '\x3cspan class\x3d"tooltip"\x3eActive\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"txt-user lock"\x3e' + l + '\x3cspan class\x3d"tooltip"\x3eLock\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"txt-user suspended"\x3e' + k + '\x3cspan class\x3d"tooltip"\x3eSuspended\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e';
		$j("#totalPL").html(a);
		$j("#accountDetailMask").remove()
	}

	function v(a) {
		$j("#todayNewPlayers").html(0 != a.todayTotalNewPlayer ? NumberFormatUtil.formatNumber(a.todayTotalNewPlayer, 0, "textRed") : 0);
		$j("#yesterdayNewPlayers").html(0 != a.yesterdayTotalNewPlayer ? NumberFormatUtil.formatNumber(a.yesterdayTotalNewPlayer, 0, "textRed") : 0);
		$j("#thisWeekNewPlayers").html(0 != a.thisWeekTotalNewPlayer ? NumberFormatUtil.formatNumber(a.thisWeekTotalNewPlayer, 0, "textRed") : 0);
		$j("#lastWeekNewPlayers").html(0 != a.lastWeekTotalNewPlayer ? NumberFormatUtil.formatNumber(a.lastWeekTotalNewPlayer,
			0, "textRed") : 0);
		0 != a.todayTotalRegister ? PageConfig.isMobile ? ($j("#todayTotalRegisterTd").html('\x3ca id\x3d"todayTotalRegister" class\x3d"txt-link" href\x3d"javascript:void(0)"\x3e' + a.todayTotalRegister + "\x3c/a\x3e"), $j("#todayTotalRegister").bind("click", function() {
			window.open(PageConfig.registerAccountUrl + "?startDate\x3d" + a.todayStartDate + "\x26endDate\x3d" + a.todayEndDate)
		})) : ($j("#todayTotalRegisterTd").html('\x3ca id\x3d"todayTotalRegister" class\x3d"txt-link" href\x3d"javascript:void(0)" data-btn\x3d"modal-Register-player"\x3e' +
			a.todayTotalRegister + "\x3c/a\x3e"), $j("#todayTotalRegister").bind("click", function() {
			PopupUtil.openIframe(PageConfig.registerAccountUrl + "?startDate\x3d" + a.todayStartDate + "\x26endDate\x3d" + a.todayEndDate)
		})) : $j("#todayTotalRegisterTd").html(0);
		0 != a.yesterdayTotalRegister ? PageConfig.isMobile ? ($j("#yesterdayTotalRegisterTd").html('\x3ca id\x3d"yesterdayTotalRegister" class\x3d"txt-link" href\x3d"javascript:void(0)"\x3e' + a.yesterdayTotalRegister + "\x3c/a\x3e"), $j("#yesterdayTotalRegister").bind("click",
				function() {
					window.open(PageConfig.registerAccountUrl + "?startDate\x3d" + a.yesterdayStartDate + "\x26endDate\x3d" + a.yesterdayEndDate)
				})) : ($j("#yesterdayTotalRegisterTd").html('\x3ca id\x3d"yesterdayTotalRegister" class\x3d"txt-link" href\x3d"javascript:void(0)" data-btn\x3d"modal-Register-player"\x3e' + a.yesterdayTotalRegister + "\x3c/a\x3e"), $j("#yesterdayTotalRegister").bind("click", function() {
				PopupUtil.openIframe(PageConfig.registerAccountUrl + "?startDate\x3d" + a.yesterdayStartDate + "\x26endDate\x3d" + a.yesterdayEndDate)
			})) :
			$j("#yesterdayTotalRegisterTd").html(0);
		0 != a.thisWeekTotalRegister ? PageConfig.isMobile ? ($j("#thisWeekTotalRegisterTd").html('\x3ca id\x3d"thisWeekTotalRegister" class\x3d"txt-link" href\x3d"javascript:void(0)"\x3e' + a.thisWeekTotalRegister + "\x3c/a\x3e"), $j("#thisWeekTotalRegister").bind("click", function() {
			window.open(PageConfig.registerAccountUrl + "?startDate\x3d" + a.thisWeekStartDate + "\x26endDate\x3d" + a.thisWeekEndDate)
		})) : ($j("#thisWeekTotalRegisterTd").html('\x3ca id\x3d"thisWeekTotalRegister" class\x3d"txt-link" href\x3d"javascript:void(0)" data-btn\x3d"modal-Register-player"\x3e' +
			a.thisWeekTotalRegister + "\x3c/a\x3e"), $j("#thisWeekTotalRegister").bind("click", function() {
			PopupUtil.openIframe(PageConfig.registerAccountUrl + "?startDate\x3d" + a.thisWeekStartDate + "\x26endDate\x3d" + a.thisWeekEndDate)
		})) : $j("#thisWeekTotalRegisterTd").html(0);
		0 != a.lastWeekTotalRegister ? PageConfig.isMobile ? ($j("#lastWeekTotalRegisterTd").html('\x3ca id\x3d"lastWeekTotalRegister" class\x3d"txt-link" href\x3d"javascript:void(0)"\x3e' + a.lastWeekTotalRegister + "\x3c/a\x3e"), $j("#lastWeekTotalRegister").bind("click",
				function() {
					window.open(PageConfig.registerAccountUrl + "?startDate\x3d" + a.lastWeekStartDate + "\x26endDate\x3d" + a.lastWeekEndDate)
				})) : ($j("#lastWeekTotalRegisterTd").html('\x3ca id\x3d"lastWeekTotalRegister" class\x3d"txt-link" href\x3d"javascript:void(0)" data-btn\x3d"modal-Register-player"\x3e' + a.lastWeekTotalRegister + "\x3c/a\x3e"), $j("#lastWeekTotalRegister").bind("click", function() {
				PopupUtil.openIframe(PageConfig.registerAccountUrl + "?startDate\x3d" + a.lastWeekStartDate + "\x26endDate\x3d" + a.lastWeekEndDate)
			})) :
			$j("#lastWeekTotalRegisterTd").html(0)
	}

	function m(a, b, c, e) {
		a = '\x3cdiv class\x3d"txt-money"\x3e' + NumberFormatUtil.formatNumber(a || 0, 0, "textRed") + "\x3c/div\x3e";
		PageConfig.isMobile && (a += "\x3cbr\x3e");
		PageConfig.isShowDepositCount && (a += '\x3cdiv class\x3d"txt-user"\x3e' + NumberFormatUtil.formatNumber(b || 0, 0) + '\x3cspan class\x3d"tooltip"\x3e' + I18N.get("agent.memberList.tooltip.user") + "\x3c/span\x3e\x3c/div\x3e", e || (PageConfig.isMobile && (a += "\x3cbr\x3e"), a += '\x3cdiv class\x3d"txt-count"\x3e' + NumberFormatUtil.formatNumber(c ||
			0, 0) + '\x3cspan class\x3d"tooltip"\x3e' + I18N.get("agent.memberList.tooltip.count") + "\x3c/span\x3e\x3c/div\x3e"));
		return a
	}

	function t(a, b) {
		var c = 0,
			e = document.createElement("tr");
		e.setAttribute("class", 0 == c % 2 ? "tr-even" : "tr-odd");
		e.setAttribute("style", "display:none");
		e.setAttribute("data-group", "noData");
		e.innerHTML = "gameRankTBody" == b ? '\x3ctd class\x3d"ct" colspan\x3d"3"\x3e' + I18N.get("form.text.report.nodata") + "\x3c/td\x3e" : '\x3ctd class\x3d"ct" colspan\x3d"2"\x3e' + I18N.get("form.text.report.nodata") +
			"\x3c/td\x3e";
		$j("#" + b).append(e);
		c++;
		"undefined" != typeof a && 0 != a.length || $j("#" + b + " tr[data-group\x3dnoData]").removeAttr("style");
		for (var d in a) {
			e = document.createElement("tr");
			e.setAttribute("class", 0 == c % 2 ? "tr-even" : "tr-odd");
			var g = "";
			if ("gameRankTBody" == b) {
				var k = NumberFormatUtil.getDecimalRoundDown(a[d].turnover, 2),
					l = NumberFormatUtil.getDecimalRoundDown(a[d].playerWinLoss, 2),
					k = MathUtil.decimal.multiply(MathUtil.decimal.divide(MathUtil.decimal.sum(k + l), k), 100);
				e.setAttribute("data-turnover", NumberFormatUtil.getDecimalRoundDown(a[d].turnover,
					2));
				e.setAttribute("data-winlose", NumberFormatUtil.getDecimalRoundDown(a[d].playerWinLoss, 2));
				g += '\x3ctd class\x3d"lt"\x3e\x3cspan class\x3d"img-platform-logo"\x3e\x3ci class\x3d"icon-' + a[d].platform + '"\x3e\x3c/i\x3e\x3cspan class\x3d"txt"\x3e' + a[d].gameName + '\x3c/span\x3e\x3cspan class\x3d"tooltip"\x3e' + a[d].platform + "\x3c/span\x3e\x3c/span\x3e\x3c/td\x3e";
				g += '\x3ctd class\x3d"rt"\x3e' + NumberFormatUtil.formatNumber(a[d].turnover, 2, "textRed") + "\x3c/td\x3e";
				g += '\x3ctd class\x3d"rt"\x3e' + NumberFormatUtil.formatNumber(k,
					0, "textRed") + "%(" + NumberFormatUtil.formatNumber(a[d].playerWinLoss, 2, "textRed") + ")\x3c/td\x3e"
			} else g = PageConfig.isOne ? g + ('\x3ctd width\x3d"50%" class\x3d"lt"\x3e\x3cb\x3e' + PageConfig.webSiteTypeName.get(a[d].webSiteType) + "\x3c/b\x3e " + a[d].userId + "\x3c/td\x3e") : g + ('\x3ctd width\x3d"50%" class\x3d"lt"\x3e' + a[d].userId + "\x3c/td\x3e"), g += '\x3ctd class\x3d"rt"\x3e' + NumberFormatUtil.formatNumber(a[d].playerWinLoss, 2, "textRed") + "\x3c/td\x3e";
			e.innerHTML = g;
			$j("#" + b).append(e);
			c++
		}
	}

	function w(a) {
		a = JSON.parse(a.chartDatasetMap);
		var b = a.turnover,
			c = Object.keys(b).sort(),
			b = n(b, c),
			e = a.winloss,
			d = Object.keys(e).sort(),
			e = n(e, d),
			c = u(c),
			g = 0,
			b = [q(b, "Turnover", g++), q(e, "Win/Loss", g++)],
			k = {},
			l = {};
		Object.entries(a).filter(function(a) {
			return a[0].startsWith("turnover_")
		}).forEach(function(a) {
			var c = a[0].substring(9).toUpperCase();
			a = a[1];
			var b = Object.keys(a).sort();
			a = n(a, b);
			k[c] = q(a, c, g++)
		});
		Object.entries(a).filter(function(a) {
			return a[0].startsWith("winloss_")
		}).forEach(function(a) {
			var c = a[0].substring(8).toUpperCase();
			a = a[1];
			var b = Object.keys(a).sort();
			a = n(a, b);
			l[c] = q(a, c, g++)
		});
		a = document.getElementById("profile-chart").getContext("2d");
		new Chart(a, {
			type: "line",
			data: {
				labels: c,
				datasets: b
			},
			options: {
				responsive: !0,
				maintainAspectRatio: !1,
				layout: {
					padding: {
						left: 0,
						top: 0,
						bottom: 0
					}
				},
				scales: {
					y: {
						beginAtZero: !0,
						grid: {
							display: !1
						},
						ticks: {
							padding: 5,
							font: {
								weight: "light"
							}
						}
					},
					x: {
						beginAtZero: !0,
						grid: {
							display: !1
						},
						ticks: {
							padding: 5,
							font: {
								weight: "light"
							}
						}
					}
				},
				plugins: {
					tooltip: {
						mode: "nearest",
						intersect: !1,
						backgroundColor: "rgba(0, 0, 0, 0.7)",
						callbacks: {
							label: function(a) {
								var c =
									a.dataset.label,
									b = a.dataset.data[a.dataIndex],
									d = NumberFormatUtil.formatNumber(b, 2).toLocaleString("en-US"),
									c = [c + ": " + d];
								subDatas = [];
								if ("Turnover" === a.dataset.label) return Object.entries(k).filter(function(c) {
									return 0 != c[1].data[a.dataIndex]
								}).forEach(function(c) {
									var d = c[1].data[a.dataIndex];
									subDatas.push([c[0], d, d / b * 100])
								}), c.concat(subDatas.sort(function(a, c) {
									return c[1] - a[1]
								}).map(function(a) {
									return a[0] + ": " + NumberFormatUtil.formatNumber(a[1], 2).toLocaleString("en-US") + (a[2] ? " (" + NumberFormatUtil.formatNumber(a[2],
										2) + "%)" : "")
								}));
								if ("Win/Loss" === a.dataset.label) return Object.entries(l).filter(function(c) {
									return 0 != c[1].data[a.dataIndex]
								}).forEach(function(c) {
									var d = c[1].data[a.dataIndex],
										e = 0 > b && 0 > d ? d / b * 100 : "";
									subDatas.push([c[0], d, e ? e : ""])
								}), c.concat(subDatas.sort(function(a, c) {
									return a[1] - c[1]
								}).map(function(a) {
									return a[0] + ": " + NumberFormatUtil.formatNumber(a[1], 2).toLocaleString("en-US") + (a[2] ? " (" + NumberFormatUtil.formatNumber(a[2], 2) + "%)" : "")
								}))
							}
						}
					}
				}
			}
		})
	}

	function x(a) {
		var b = JSON.parse(a.ChartActivePlayer),
			c = Object.keys(b).sort(),
			d = n(b, c);
		console.log(b);
		var h = JSON.parse(a.ChartNewPlayer),
			b = Object.keys(h).sort(),
			h = n(h, b),
			g = n(JSON.parse(a.ChartNewPlayerIsSelfRegister), b);
		a = u(c);
		d = [{
			data: d,
			borderColor: "#11a8ff",
			backgroundColor: "#11a8ff",
			fill: !1,
			label: "Active Player"
		}, {
			data: h,
			borderColor: "#6a71ab",
			backgroundColor: "#6a71ab",
			fill: !1,
			label: "New Player"
		}];
		c = document.getElementById("player-chart").getContext("2d");
		new Chart(c, {
			type: "line",
			data: {
				labels: a,
				datasets: d
			},
			options: {
				responsive: !0,
				maintainAspectRatio: !1,
				layout: {
					padding: {
						left: 0,
						top: 0,
						bottom: 0
					}
				},
				scales: {
					y: {
						beginAtZero: !0,
						grid: {
							display: !1
						},
						ticks: {
							padding: 5,
							font: {
								weight: "light"
							}
						}
					},
					x: {
						beginAtZero: !0,
						grid: {
							display: !1
						},
						ticks: {
							padding: 5,
							font: {
								weight: "light"
							}
						}
					}
				},
				plugins: {
					tooltip: {
						mode: "nearest",
						intersect: !1,
						backgroundColor: "rgba(0, 0, 0, 0.7)",
						custom: function(a) {
							var c = document.getElementById("chartjs-tooltip");
							c || (c = document.createElement("div"), c.id = "chartjs-tooltip", c.classList.add("chartjs-tooltip"), document.body.appendChild(c));
							if (0 === a.opacity) c.style.opacity =
								0;
							else {
								var b = a.dataset.label,
									d = a.dataset.data[a.dataIndex];
								b && null !== d ? (c.innerHTML = b + ": " + d, c.style.background = "#333", c.style.border = "1px solid #333", c.style.opacity = 1, c.style.left = a.tooltip.caretX + "px", c.style.top = a.tooltip.caretY + "px") : c.style.opacity = 0
							}
						},
						callbacks: {
							label: function(a) {
								var c = a.dataset.label,
									b = a.dataset.data[a.dataIndex];
								if ("New Player" === c) return c = g[a.dataIndex], a = ["New Player: " + b], 0 < c && a.push("self signup: " + c), b -= c, 0 < b && a.push("agent signup: " + b), a;
								if ("Active Player" === c) return "Active Player: " +
									b
							}
						}
					}
				}
			}
		})
	}

	function u(a) {
		for (var b = 0; b < a.length; b++) a[b] = a[b].substring(a[b].indexOf("-") + 1, a[b].length);
		return a
	}

	function n(a, b) {
		var c = [];
		b = $jscomp.makeIterator(b);
		for (var d = b.next(); !d.done; d = b.next()) key = d.value, c.push(a[key]);
		return c
	}
    x()
// 	MyProfileHandler.init = function() {
// 		JCache.get("#myProfile").addClass("now");
// 		PageConfig.isShowStatisticInformation && MyProfileHandler.searchDetail();
// 		PageConfig.isShowTopWinLoseArea && MyProfileHandler.searchTopWinAndGameRank("");
// 		d();
// 		h()
// 	};
// 	MyProfileHandler.initMobile = function() {
// 		PageConfig.isShowStatisticInformation &&
// 			MyProfileHandler.initSearchDetailMobile();
// 		PageConfig.isShowTopWinLoseArea && MyProfileHandler.initTopWinAndGameRankMobile();
// 		d();
// 		h();
// 		$j("#settingBoxIframeWrapper").on("hidden.bs.modal", function() {
// 			$j("#settingBoxIframe").attr("src", "")
// 		})
// 	};
// 	MyProfileHandler.checkLoginName = function() {
// 		var a = JCache.get("#loginName").val();
// 		/^[0-9a-zA-Z]{4,20}$/.test(a) ? postAjax({
// 			url: PageConfig.checkLoginNameUrl,
// 			type: "POST",
// 			data: {
// 				loginName: a
// 			},
// 			success: function(a) {
// 				a.error ? alert(a.error) : a ? alert(I18N.get("agent.myProfile.msg.nicknameCanUse")) :
// 					alert(I18N.get("agent.myProfile.msg.nicknameCantUse"))
// 			}
// 		}) : alert(I18N.get("agent.myProfile.msg.nicknameFormatError"))
// 	};
// 	MyProfileHandler.updateLoginName = function() {
// 		var a = JCache.get("#loginName").val();
// 		/^[0-9a-zA-Z]{4,20}$/.test(a) ? postAjax({
// 			url: PageConfig.updateLoginNameUrl,
// 			type: "POST",
// 			data: {
// 				loginName: a
// 			},
// 			success: function(a) {
// 				a.error ? alert(a.error) : (alert(a.message), location.reload())
// 			}
// 		}) : alert(I18N.get("agent.myProfile.msg.nicknameFormatError"))
// 	};
// 	MyProfileHandler.openUpdatePop = function(a) {
// 		JCache.get(a).show();
// 		"#otpPop" == a ? $j("#otpPassword").focus() : "#securityPop" == a ? 0 < $j("#oldSecurityCode").length ? $j("#oldSecurityCode").focus() : $j("#securityCode").focus() : "#passwordPop" == a ? 0 < $j("#oldPassword").length ? $j("#oldPassword").focus() : $j("#password").focus() : "#chipsRequestPopup" == a && $j("#chipsRequestInput").focus();
// 		JCache.get("body").addClass("overHidden")
// 	};
// 	MyProfileHandler.closeUpdatePop = function(a) {
// 		JCache.get(a).hide();
// 		JCache.get("body").removeClass("overHidden")
// 	};
// 	MyProfileHandler.resetPassword = function() {
// 		var a =
// 			JCache.get("#oldPassword");
// 		if (ValidateUtil.isEmpty(a.val())) a.parent().addClass("notice"), alert(I18N.get("msg.error.validation.invalidPassword"));
// 		else {
// 			a.parent().removeClass("notice");
// 			var b = JCache.get("#password");
// 			if (ValidateUtil.isValidPassword(b.val())) {
// 				b.parent().removeClass("notice");
// 				var c = JCache.get("#confirmPassword");
// 				ValidateUtil.isValidPassword(c.val()) ? (c.parent().removeClass("notice"), $j("#password").val() != $j("#confirmPassword").val() ? (c.parent().addClass("notice"), alert(I18N.get("msg.error.passwordDiff"))) :
// 					(c.parent().removeClass("notice"), postAjax({
// 						url: PageConfig.updatePasswordUrl,
// 						type: "POST",
// 						data: {
// 							oldPassword: EncryptUtil.mask(a.val()),
// 							newPassword: EncryptUtil.mask(b.val())
// 						},
// 						success: function(d) {
// 							d.error ? alert(d.error) : (alert(d.message), MyProfileHandler.closeUpdatePop("#passwordPop"));
// 							a.val("");
// 							b.val("");
// 							c.val("")
// 						}
// 					}))) : (c.parent().addClass("notice"), alert(I18N.get("msg.error.confirmPasswordNotVaild")))
// 			} else b.parent().addClass("notice"), alert(I18N.get("msg.error.validation.invalidPassword"))
// 		}
// 	};
// 	MyProfileHandler.resetSecurityCode =
// 		function() {
// 			var a = JCache.get("#oldSecurityCode");
// 			if (ValidateUtil.isEmpty(a.val())) a.parent().addClass("notice"), alert(I18N.get("agent.myProfile.msg.securityCodeInvalid"));
// 			else {
// 				a.parent().removeClass("notice");
// 				var b = JCache.get("#securityCode");
// 				ValidateUtil.isValidSecurityCode(b.val()) ? (b.parent().removeClass("notice"), postAjax({
// 					url: PageConfig.updateSecurityCodeUrl,
// 					type: "POST",
// 					data: {
// 						oldSecurityCode: a.val(),
// 						newSecurityCode: b.val()
// 					},
// 					success: function(c) {
// 						c.error ? alert(c.error) : (alert(c.message), MyProfileHandler.closeUpdatePop("#securityPop"));
// 						a.val("");
// 						b.val("")
// 					}
// 				})) : (b.parent().addClass("notice"), alert(I18N.get("agent.myProfile.msg.securityCodeInvalid")))
// 			}
// 		};
// 	MyProfileHandler.getOnlinePlayerAndAgentCount = function() {
// 		var a = $j("#statisticWebSiteType option:selected").val();
// 		a && "-" !== a && postAjax({
// 			url: PageConfig.getOnlinePlayerAndAgentCount,
// 			data: {
// 				webSiteType: a
// 			},
// 			type: "POST",
// 			success: function(a) {
// 				a.error ? alert(a.error) : ($j("#onlinePlayerCount").text(a.onlinePlayerCount), $j("#onlineAgentCount").text(a.onlineAgentCount), a.errorServer && alert(a.errorServer +
// 					" can't get online agent count"))
// 			},
// 			beforeSend: function() {
// 				PageConfig.isOne && (PageConfig.statisticAjaxCountDown++, $j("#statisticWebSiteType").attr("disabled", !0))
// 			},
// 			complete: function() {
// 				PageConfig.isOne && (PageConfig.statisticAjaxCountDown--, 0 === PageConfig.statisticAjaxCountDown && $j("#statisticWebSiteType").attr("disabled", !1))
// 			}
// 		})
// 	};
// 	MyProfileHandler.searchAccountDetail = once(function() {
// 		if (PageConfig.isShowTotalAccount) {
// 			var a = $j("#statisticWebSiteType option:selected").val();
// 			"-" === a && (a = "-1");
// 			postAjax({
// 				url: PageConfig.searchAccountDetail,
// 				data: {
// 					webSiteType: a
// 				},
// 				type: "POST",
// 				success: function(a) {
// 					a.error ? (alert(a.error), $j("#accountDetailMask").show(), $j("#accountDetailTable").hide()) : p(a)
// 				},
// 				beforeSend: function() {
// 					PageConfig.isOne && (PageConfig.statisticAjaxCountDown++, $j("#statisticWebSiteType").attr("disabled", !0));
// 					$j("#accountDetailMask").hide();
// 					$j("#accountDetailTable").show()
// 				},
// 				complete: function() {
// 					PageConfig.isOne && (PageConfig.statisticAjaxCountDown--, 0 === PageConfig.statisticAjaxCountDown && $j("#statisticWebSiteType").attr("disabled", !1))
// 				},
// 				error: function() {
// 					$j("#accountDetailMask").hide();
// 					$j("#accountDetailTable").show()
// 				}
// 			})
// 		}
// 	}, 3E3);
// 	MyProfileHandler.initSearchDetailMobile = function() {
// 		$j("#searchDaysInfo").click()
// 	};
// 	MyProfileHandler.searchDetail = function(a) {
// 		if (PageConfig.isShowStatisticInformation) {
// 			var b = "";
// 			a && (b = a);
// 			a = $j("#statisticWebSiteType option:selected").val();
// 			"-" === a && (a = "-1");
// 			postAjax({
// 				url: PageConfig.searchInformationStatistic,
// 				data: {
// 					webSiteType: a,
// 					infoType: b
// 				},
// 				type: "POST",
// 				success: function(a) {
// 					a.error ? alert(a.error) : ($j("#todayTotalTurnover").html(NumberFormatUtil.formatNumber(a.todayTotalTurnover ||
// 						0, 0, "textRed")), $j("#todayTotalPlayerWinLoss").html(NumberFormatUtil.formatNumber(a.todayTotalPlayerWinLoss || 0, 0, "textRed")), $j("#todayTotalBetCount").html(NumberFormatUtil.formatNumber(a.todayTotalBetCount || 0, 0, "textRed") + '\x3cspan class\x3d"tooltip"\x3e' + I18N.get("agent.myProfile.msg.betCount") + "\x3c/span\x3e"), $j("#yesterdayTotalTurnover").html(NumberFormatUtil.formatNumber(a.yesterdayTotalTurnover || 0, 0, "textRed")), $j("#yesterdayTotalPlayerWinLoss").html(NumberFormatUtil.formatNumber(a.yesterdayTotalPlayerWinLoss ||
// 						0, 0, "textRed")), $j("#yesterdayTotalBetCount").html(NumberFormatUtil.formatNumber(a.yesterdayTotalBetCount || 0, 0, "textRed") + '\x3cspan class\x3d"tooltip"\x3e' + I18N.get("agent.myProfile.msg.betCount") + "\x3c/span\x3e"), $j("#thisWeekTotalTurnover").html(NumberFormatUtil.formatNumber(a.thisWeekTotalTurnover || 0, 0, "textRed")), $j("#thisWeekTotalPlayerWinLoss").html(NumberFormatUtil.formatNumber(a.thisWeekTotalPlayerWinLoss || 0, 0, "textRed")), $j("#thisWeekTotalBetCount").html(NumberFormatUtil.formatNumber(a.thisWeekTotalBetCount ||
// 						0, 0, "textRed") + '\x3cspan class\x3d"tooltip"\x3e' + I18N.get("agent.myProfile.msg.betCount") + "\x3c/span\x3e"), $j("#lastWeekTotalTurnover").html(NumberFormatUtil.formatNumber(a.lastWeekTotalTurnover || 0, 0, "textRed")), $j("#lastWeekTotalPlayerWinLoss").html(NumberFormatUtil.formatNumber(a.lastWeekTotalPlayerWinLoss || 0, 0, "textRed")), $j("#lastWeekTotalBetCount").html(NumberFormatUtil.formatNumber(a.lastWeekTotalBetCount || 0, 0, "textRed") + '\x3cspan class\x3d"tooltip"\x3e' + I18N.get("agent.myProfile.msg.betCount") +
// 						"\x3c/span\x3e"), $j("#todayActivePlayers").html(NumberFormatUtil.formatNumber(a.todayActivePlayers || 0, 0, "textRed") + '\x3cspan class\x3d"tooltip"\x3e' + I18N.get("agent.myProfile.msg.activePlayer") + "\x3c/span\x3e"), $j("#yesterdayActivePlayers").html(NumberFormatUtil.formatNumber(a.yesterdayActivePlayers || 0, 0, "textRed") + '\x3cspan class\x3d"tooltip"\x3e' + I18N.get("agent.myProfile.msg.activePlayer") + "\x3c/span\x3e"), $j("#thisWeekActivePlayers").html(NumberFormatUtil.formatNumber(a.thisWeekActivePlayers ||
// 						0, 0, "textRed") + '\x3cspan class\x3d"tooltip"\x3e' + I18N.get("agent.myProfile.msg.activePlayer") + "\x3c/span\x3e"), $j("#lastWeekActivePlayers").html(NumberFormatUtil.formatNumber(a.lastWeekActivePlayers || 0, 0, "textRed") + '\x3cspan class\x3d"tooltip"\x3e' + I18N.get("agent.myProfile.msg.activePlayer") + "\x3c/span\x3e"), PageConfig.isShowFundInOutStatistic && ($j("#todayTotalDeposit").html(m(a.todayDeposit, a.todayDepositPlayerCount, a.todayDepositCount, !1)), $j("#yesterdayTotalDeposit").html(m(a.yesterdayDeposit,
// 							a.yesterdayDepositPlayerCount, a.yesterdayDepositCount, !1)), $j("#thisWeekTotalDeposit").html(m(a.thisWeekDeposit, a.thisWeekDepositPlayerCount, a.thisWeekDepositCount, !1)), $j("#lastWeekTotalDeposit").html(m(a.lastWeekDeposit, a.lastWeekDepositPlayerCount, a.lastWeekDepositCount, !1)), $j("#todayFirstDeposit").html(m(a.todayFirstDeposit, a.todayFirstDepositPlayerCount, a.todayFirstDepositPlayerCount, !0)), $j("#yesterdayFirstDeposit").html(m(a.yesterdayFirstDeposit, a.yesterdayFirstDepositPlayerCount, a.yesterdayFirstDepositPlayerCount,
// 							!0)), $j("#thisWeekFirstDeposit").html(m(a.thisWeekFirstDeposit, a.thisWeekFirstDepositPlayerCount, a.thisWeekFirstDepositPlayerCount, !0)), $j("#lastWeekFirstDeposit").html(m(a.lastWeekFirstDeposit, a.lastWeekFirstDepositPlayerCount, a.lastWeekFirstDepositPlayerCount, !0)), $j("#todayTotalBonus").html(NumberFormatUtil.formatNumber(a.todayBonus || 0, 0, "textRed")), $j("#yesterdayTotalBonus").html(NumberFormatUtil.formatNumber(a.yesterdayBonus || 0, 0, "textRed")), $j("#thisWeekTotalBonus").html(NumberFormatUtil.formatNumber(a.thisWeekBonus ||
// 							0, 0, "textRed")), $j("#lastWeekTotalBonus").html(NumberFormatUtil.formatNumber(a.lastWeekBonus || 0, 0, "textRed")), $j("#todayTotalWithdraw").html(NumberFormatUtil.formatNumber(a.todayWithdraw || 0, 0, "textRed")), $j("#yesterdayTotalWithdraw").html(NumberFormatUtil.formatNumber(a.yesterdayWithdraw || 0, 0, "textRed")), $j("#thisWeekTotalWithdraw").html(NumberFormatUtil.formatNumber(a.thisWeekWithdraw || 0, 0, "textRed")), $j("#lastWeekTotalWithdraw").html(NumberFormatUtil.formatNumber(a.lastWeekWithdraw || 0, 0, "textRed")),
// 						$j("#todayTotalFundInOut").html(NumberFormatUtil.formatNumber(MathUtil.decimal.sum(a.todayDeposit, a.todayBonus, a.todayWithdraw), 0, "textRed")), $j("#yesterdayTotalFundInOut").html(NumberFormatUtil.formatNumber(MathUtil.decimal.sum(a.yesterdayDeposit, a.yesterdayBonus, a.yesterdayWithdraw), 0, "textRed")), $j("#thisWeekTotalFundInOut").html(NumberFormatUtil.formatNumber(MathUtil.decimal.sum(a.thisWeekDeposit, a.thisWeekBonus, a.thisWeekWithdraw), 0, "textRed")), $j("#lastWeekTotalFundInOut").html(NumberFormatUtil.formatNumber(MathUtil.decimal.sum(a.lastWeekDeposit,
// 							a.lastWeekBonus, a.lastWeekWithdraw), 0, "textRed"))), PageConfig.isShowChart && PageConfig.isShowPorfileChart && ($j("#profile-chart").remove(), $j("#chartCanvasWrapper").prepend('\x3ccanvas id\x3d"profile-chart"\x3e\x3c/canvas\x3e'), w(a)))
// 				},
// 				beforeSend: function() {
// 					PageConfig.isOne && (PageConfig.statisticAjaxCountDown++, $j("#statisticWebSiteType").attr("disabled", !0))
// 				},
// 				complete: function() {
// 					PageConfig.isOne && (PageConfig.statisticAjaxCountDown--, 0 === PageConfig.statisticAjaxCountDown && $j("#statisticWebSiteType").attr("disabled",
// 						!1))
// 				}
// 			});
// 			postAjax({
// 				url: PageConfig.searchNewPlayerStatistic,
// 				data: {
// 					webSiteType: a
// 				},
// 				type: "POST",
// 				success: function(a) {
// 					a.error ? alert(a.error) : (v(a), PageConfig.isShowChart && PageConfig.isShowPlayerCountChart && ($j("#player-chart").remove(), $j("#chartCanvasWrapper").append('\x3ccanvas id\x3d"player-chart"\x3e\x3c/canvas\x3e'), x(a)))
// 				},
// 				beforeSend: function() {
// 					PageConfig.isOne && (PageConfig.statisticAjaxCountDown++, $j("#statisticWebSiteType").attr("disabled", !0))
// 				},
// 				complete: function() {
// 					PageConfig.isOne && (PageConfig.statisticAjaxCountDown--,
// 						0 === PageConfig.statisticAjaxCountDown && $j("#statisticWebSiteType").attr("disabled", !1))
// 				}
// 			})
// 		}
// 	};
// 	MyProfileHandler.copyLink = function(a) {
// 		var b = $j("\x3cinput\x3e");
// 		$j(a).parent().append(b);
// 		b.val($j(a).parent().find("p").text()).select();
// 		document.execCommand("copy");
// 		b.remove()
// 	};
// 	MyProfileHandler.resetOtp = function() {
// 		var a = JCache.get("#otpPassword");
// 		if (ValidateUtil.isEmpty(a.val())) alert("Please input password");
// 		else {
// 			var b = JCache.get("#oldOtpKey");
// 			ValidateUtil.isEmpty(b.val()) ? (b.parent().addClass("notice"),
// 				alert("Please input OTP")) : postAjax({
// 				url: PageConfig.resetOtpUrl,
// 				type: "POST",
// 				data: {
// 					otpKey: b.val(),
// 					password: EncryptUtil.mask(a.val()),
// 					isResetByUpline: !1
// 				},
// 				success: function(c) {
// 					c.error ? alert(c.error) : (alert(c.message), MyProfileHandler.closeUpdatePop("#otpPop"), setInterval(function() {
// 						window.location.reload()
// 					}, 3E3));
// 					b.val("");
// 					a.val("")
// 				}
// 			})
// 		}
// 	};
// 	MyProfileHandler.searchTopWinAndGameRank = function(a, b) {
// 		if (PageConfig.isShowTopWinLoseArea) {
// 			b && $j("#topWinLossPeriod").val("today");
// 			b = $j("#statisticWebSiteType option:selected").val();
// 			"-" === b && (b = "-1");
// 			var c = $j("#topWinLossPeriod").val();
// 			postAjax({
// 				url: PageConfig.searchTopWinLossInfo,
// 				data: {
// 					webSiteType: b,
// 					period: c,
// 					infoType: a
// 				},
// 				type: "POST",
// 				success: function(a) {
// 					a.error ? alert(a.error) : (t(a.topWinPlayer, "topWinLossPlayerTBody"), t(a.gameRank, "gameRankTBody"), MyProfileHandler.filterGameRank())
// 				},
// 				beforeSend: function() {
// 					$j("#topWinLossPlayerTBody").html("");
// 					$j("#gameRankTBody").html("");
// 					$j("#topWinLossPeriod").attr("disabled", !0)
// 				},
// 				complete: function() {
// 					$j("#topWinLossPeriod").attr("disabled", !1)
// 				}
// 			})
// 		}
// 	};
// 	MyProfileHandler.initTopWinAndGameRankMobile = function() {
// 		$j("#todayTopwin").click()
// 	};
// 	MyProfileHandler.searchTopWinAndGameRankMobile = function(a, b) {
// 		$j("#topWinLossPeriod").val(a);
// 		MyProfileHandler.searchTopWinAndGameRank(b)
// 	};
// 	MyProfileHandler.submitMobileGameRankFilter = function() {
// 		MyProfileHandler.filterGameRank();
// 		$j("#gameRankFilterPopupCloseBtn").click()
// 	};
// 	MyProfileHandler.filterGameRank = function() {
// 		var a = parseFloat($j("#turnoverFilter").val()),
// 			b = parseFloat($j("#winloseFilter").val());
// 		isNaN(a) ? a = 0 : CookieUtil.setCookie("turnoverFilter",
// 			a, 7);
// 		isNaN(b) ? b = 0 : CookieUtil.setCookie("winloseFilter", b, 7);
// 		PageConfig.isMobile && ($j("#turnoverFilterA").text(a), $j("#winloseFilterA").text(b));
// 		var c = 0;
// 		$j("#gameRankTBody tr").each(function() {
// 			$j(this).removeAttr("class");
// 			$j(this).attr("data-turnover") > a && $j(this).attr("data-winlose") > b ? ($j(this).prop("class", 0 == c % 2 ? "tr-even" : "tr-odd"), $j(this).removeAttr("style"), c++) : $j(this).prop("style", "display:none")
// 		});
// 		0 == c && $j("#gameRankTBody tr[data-group\x3dnoData]").removeAttr("style")
// 	};
// 	var r = "#fa8c0b #63A41B #ea9ad2 #969eda #96dacf #ffef6b #ffb659 #ff4747 #6edc98 #2f42c8".split(" "),
// 		q = function(a, b, c) {
// 			return {
// 				data: a,
// 				borderColor: r[c % r.length],
// 				backgroundColor: r[c % r.length],
// 				borderWidth: 3,
// 				fill: !1,
// 				label: b
// 			}
// 		}
})();