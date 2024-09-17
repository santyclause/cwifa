export class Art {
  constructor(data) {
    this.id = data.id ?? '',
    this.attribution = data.attribution ?? '',
    this.description = data.description ?? '',
    this.imgUrls = data.imgUrls ?? ''
  }

  get smallImgUrl() {
    const smallUrl = this.imgUrls.small;
    return smallUrl;
  }

  get fullImgUrl() {
    const fullUrl = this.imgUrls.full;
    return fullUrl;
  }

}