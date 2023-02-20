import CMS from "netlify-cms"
import style01 from "../assets/web/assets/mobirise-icons2/mobirise2.css"
import style02 from "../assets/bootstrap/css/bootstrap.min.css"
import style03 from "../assets/bootstrap/css/bootstrap-grid.min.css"
import style04 from "../assets/bootstrap/css/bootstrap-reboot.min.css"
import style05 from "../assets/dropdown/css/style.css"
import style06 from "../assets/socicon/css/styles.css"
import style07 from "../assets/theme/css/style.css"

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
