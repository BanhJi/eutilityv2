/*
 * Last modified : 3/3/21, 9:51 AM in Project banhji-accounting-web-module
 * Copyright (c) 2021. Chandarith Chea under Company BanhJi Fintech Co., Ltd
 * Facebook Profile : https://www.facebook.com/profile.php?id=100011194806947
 * Github Profile : https://github.com/Darith-Mokpost
 * Instagram Profile : https://www.instagram.com/chandarith_chea
 */

export default class ReceiptOrder {
  constructor(data = {}) {
    this.id = data.id || ''
    this.number = data.number || ''
    this.abbr = data.abbr || ''
    this.materialType = data.materialType || {}
    this.structure = data.structure || ''
    this.transactionDate = data.transactionDate || ''
    this.sequcencing = data.sequcencing || ''
    this.type = data.type || ''
    this.supplier = data.supplier || {}
    this.date = data.date || new Date().toISOString().substr(0, 10)
    this.batch = data.batch || {}
    this.zone = data.zone || {}
    this.warehouse = data.warehouse || {}
    this.monthOf = data.monthOf || new Date().toISOString().substr(0, 7)
    this.expirationDate = data.expirationDate || new Date().toISOString().substr(0, 10)
    this.itemLines = data.itemLines || []
    this.deliveredBy = data.deliveredBy || ''
    this.driverName = data.driverName || ''
    this.vehicleNumber = data.vehicleNumber || ''
    this.timeOfDischarged = data.timeOfDischarged || null
    this.location = data.location || {}
    this.saleChannel = data.saleChannel || {}
    // this.project = data.project || {}
    // this.segment = data.segment || {}
  }

  constuct(data) {
    this.constructor(data);
  }
}
