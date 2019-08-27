<template>
	<div>
		<div class="hd-ma wi-100 po-fi ba-wh fs-18 cl-33 lvHeader-main">
			<div class="hd-ct wi-100 flx flx-ali-cet flx-jus-cet">
				<span class="hd-ba po-ab" @click="back()"><i></i></span>
				国内/国际酒店
				<span class="hd-btn po-ab"></span>
				<span class="hd-btn btn-map po-ab"></span>
			</div>
		</div>
		<div class="hd-ma wi-100 po-fi ba-wh fs-18 cl-33 lvHeader-main" id="boxcountry">
			<div class="hd-ct wi-100 flx flx-ali-cet flx-jus-cet">
				<span class="hd-ba po-ab" @click="back()"><i></i></span>
				国内/国际酒店
				<span class="hd-btn po-ab"></span>
				<span class="hd-btn btn-map po-ab"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'lvHeader',
		created: function() {
			$(window).bind("scroll", function() {
				// console.log("1");
				var sTop = $(window).scrollTop();
				var sTop = parseInt(sTop);
				if (sTop >= 5) {
					// console.log("1");
					if (!$("#boxcountry").is(":visible")) {
						try {
							$("#boxcountry").slideDown();
						} catch (e) {
							$("#boxcountry").show();
						}
					}
				} else {
					if ($("#boxcountry").is(":visible")) {
						try {
							$("#boxcountry").slideUp();
						} catch (e) {
							$("#boxcountry").hide();
						}
					}
				}
			})
		},
		methods: {
			back() {
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
	.ha-ma {
		top: 0;
		left: 0;
		z-index: 11;
		-webkit-transition: background-color .2s ease;
		transition: background-color .2s ease
	}

	.wi-100 {
		width: 100%
	}

	.po-fi {
		position: sticky
	}

	.po-ab {
		position: absolute
	}

	.ba-wh {
		background-color: #fff
	}

	.fs-18 {
		font-size: 18px;
	}

	.cl-33 {
		color: #333
	}

	.lvHeader-main {
		top: 0 !important;
	}

	.hd-ct {
		height: 44px;
	}

	.flx {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex
	}

	.flx-jus-cet {
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center
	}

	.flx-ali-cet {
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center
	}

	.hd-ba {
		height: 44px;
		width: 45px;
		left: 0;
		top: 0;
		z-index: 11
	}

	.hd-btn.btn-map {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAgVBMVEUAAABmZmZmZmZnZ2dqampmZmZmZmZnZ2dmZmZnZ2dnZ2dnZ2dmZmZmZmZoaGhpaWlra2tqamqPj49nZ2dpaWlra2t1dXVmZmZnZ2dmZmZnZ2dnZ2dmZmZnZ2dnZ2dnZ2dnZ2dmZmZmZmZnZ2dmZmZnZ2dnZ2doaGh2dnZmZmZmZmaTh8y7AAAAKnRSTlMA8PUjGvqZgsaqXlTqsTgeDwkDTi4UC7hju4XMiHl0aube1L+ikkdDBm5EGjbtAAACRElEQVRIx+1V2ZaiMBS8CYQtsgsiSLu1W/3/B05AFNozQJw5p5+sF08SK5e6xS3ogw/+D3n+j8SlXTGAVfbyfaoPBc6h4L9JLwTY6RIRRZcTgyje4ZaAlT0WmQXY+lwPwlM/YVFuiqxZC3i6XIOjIIpc0co+mUoFuKFJdvGtyh4gjvbJF9iHRN9wNQuDm5TtUIXt6oh9RiaHXumvprAFJ+9eFAd2U/pLi7yGpJwjeFqORUwSay3yHgZdUPUbFc5Ky16LzBFTAX/YwIJicC0yQ0TesLsneBSBaZEPWFKARdK3346V8IMWeaUkJjtIGuKMlRbZalzZgnWzFNZm65+lRU7htFcsvmKiq8ewVUsHqRY55lC1Eh9glcMANycywWPdd7tuZ6uCgtPOUw2X9HABi+6THAT3qY4YLqSJI8rXcDiSLgLwcLgOOQIt4tbZGUq1k/RbiaMUm4fjbJLdAGZQtMem39tgH1HIgNsM2UGdNw8ukPa+i+ah8xrOJLX3swbvZAYcde//pOLnKFrd+7lksJ7+b2dSxHt0yQcLVF0G/9E7b9qwSIiIOlxdcCk53OvgNJtM+/XAIQsK1sCz1WT2+z9V3YS4vXZkFPlrPw3j1Yt8lCznnHQgR89Uss9/D0ZwZTDmvkTsOnJ0vidkKEs7NX9oTe1ShvdkPY8mnyXL1QItdr66oeX5O7RYrEppjeVgsnj8yd6s2f2G+xZbb+zV4zT5e/CxhpeGnTypbmh5smtEmDY3sJEgzBqhUz4rmBl98MFv4Q8uXTXrWsKuRQAAAABJRU5ErkJggg==);
		right: 50px
	}

	.hd-btn {
		right: 10px;
		top: 7px;
		width: 30px;
		height: 30px;
		background-size: 30px;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAQAAACQ9RH5AAADeUlEQVRYw+2YW2hcVRSGT5OmEa1tfVCLVouK6UO94EMMXhJTxaLFooJapRD1od+/Z6aTlFgigujQCl4QRRDRFoRqVMhTfVEDai94gQrx9mRMByGtNtQ2NjFxaMdZPmSMk2bOeM6Zk3maf16Gc/Y63157r7322tvz6qqrrrpqp8R1dPOi9jCoT9XPy+pNttqiBUW6W3iTUWz+T2PaozsXBEobg0XIEXa7PnWxXne4zTzBGzpcfPNVzPD0Mj7AMMa1U9eXHf41ekpjGKZP0hfG5eu1GsaY0M5tKyq2O1fbOY5xVB0xYLVR05iGElcGaZ1cqX0YefdYtd7eyl+YdmXOCWox0MhzGHl3fzVRfA3jmF4PPUpPY8qxLmpINWsYYyDTEGGCXsX0W+WY8Pc3g/FDZkkUW1vEfky7ogTV1cpRSN4cdZpSLcpRSLSHB/dj7K5qPTyDMRg2mpdrWn9zeVUrYjlTFLZeEc4oEaG3831+G+P5cOAvMfdQ1eCbMEZCGGQaNE2h7/xqwZkG/sQSFwTfcddgZMs8b9cDvmO0XhvK+PwF5m4PPtAPYtqXajk7AZAln17mY/MHU3PLgeTSVAvvYeoNOjMbGCnurznXOefNGOYu8gHnsYHGknW8VpPFMuEX93AQb3fMIDXM8bNjMgyYboxxfmIKC5DDErdRUE6OJs/Tk5hemPPxn3XGL+R0UpOlQ60ejNc8b6BRj+gU5h8dM833Yq6v+H8eONmauNu3y+1zd6N/wZ7neerCOFR5oEex9Co/cKhM0P0fON3MaeVoquTxGNZzcRzgUo9pUo7T6eZK/fwIIxG3x9yH8W3lPfgejAndG6fHrpNjmNvyfwZvYRijOkC2WrCOsJ8shvFhEJPH+bW49AvaGBWcbCVf/MoJ9QYun9Kr1OE6uapsXvt+Zipmn3RoSF1l0JfpJUxDMZX3AqPAjpmCN7NYPTqD8WzZPe5HzCm+U9QrGKZTOsDn+h3D1F+aLGcDdTNGtuLqDe31Xfp69pz4nTaVLfZWcwLj0dhPj1svUQfrUqt9SoAlHMK0d4HPzfOwi/U+psMRC/qo2n6ePsaYcDfUBLdthd7VpE5ueUffYByrEdbzdLDkamKkXAZYEKXWlmDzyZU1m1faSq9ikktrGMez+d30WU1j2d3IUQzTkLu0xhdvNNFW/k6orrrqqitW/QMUUfL+JewfZgAAAABJRU5ErkJggg==);
		pointer-events: all
	}

	.hd-ba>i,
	.hd-ba>i:after {
		position: absolute;
		width: 30px;
		height: 30px
	}

	.hd-ba>i:after {
		content: "";
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAQAAAAnDwIWAAABZUlEQVQ4y63UsS8DcRQH8B4NNVRCJ8REDBJGwcJAYrEgBomBJu/7u55L1HCL5RD+gdrEQmJgqsGmJoNOlia2DiRNSDpdJE2rp/fO/t7g5k++9/u9934vkfjfjxx8GE9FcUQhhXgRYWhRIaIUmEWB+km64tQ65iSaoiLTmj0tUC9NJabV3LhAnQyVmVbMiED3hlHha5WdjFTVMVSZlry0RKdQY1r0UwK1Z1Hns177SalXyxRwaiG0BGrWqcH0WGys2aVWB7ZNXh6WA2p3aAs7Mj3h3zewphxBCuwlzWi/R9gc6obb5eQWsjqe5Uqo01fxzZ0797sUPDf/1+g7t1eTPhlfFU9uvyZ9NJ5jvNKQgucH6Tl+TM6Ehvfhnkv5ZWYU/LabLuOeYkVVSnPKh2mabWVf8RONLEiXvhk9Brwpt6e9QA+0FS0c9cLFBpp4tAd023lfuZt4Qfbghkt5ocoOLZzRZ1TGX8O2x0u+WSSMAAAAAElFTkSuQmCC) 50% no-repeat;
		background-size: 10px;
		top: 7px;
		left: 0
	}

	#boxcountry {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		background: white;
		z-index: 800;
	}
</style>
