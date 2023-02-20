


CMS.init()
CMS.registerPreviewStyle(style01)
CMS.registerPreviewStyle(style02)
CMS.registerPreviewStyle(style03)
CMS.registerPreviewStyle(style04)
CMS.registerPreviewStyle(style05)
CMS.registerPreviewStyle(style06)
CMS.registerPreviewStyle(style07)


var BlogPreview = createClass({
    render: function() {
      const { entry, getAsset, widgetsFor } = this.props
     // const imagePath = entry.getIn(['data', 'image'])
     // const image = getAsset(imagePath)
     console.log(entry)
     console.log(getAsset)
     console.log(widgetsFor)
  
      return h('div', {style: {'background-color': '#22f'}},entry.getIn(['data', 'title'])

      )
    }
  })
  
  CMS.registerPreviewTemplate('blog', BlogPreview)
