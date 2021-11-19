amis.define('docs/zh-CN/components/form/tabs-transfer-picker.md', function(require, exports, module, define) {

  module.exports = {
    "title": "TabsTransferPicker 穿梭选择器",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "TabsTransferPicker 穿梭选择器",
    "icon": null,
    "html": "<div class=\"markdown-body\"><p>在<a href=\"./tabs-transfer\">TabsTransfer 组合穿梭器</a>的基础上扩充了弹窗选择模式，展示值用的是简单的 input 框，但是编辑的操作是弹窗个穿梭框来完成。</p>\n<p>适合用来做复杂选人组件。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n    \"label\": \"组合穿梭器\",\n    \"type\": \"tabs-transfer-picker\",\n    \"name\": \"a\",\n    \"sortable\": true,\n    \"selectMode\": \"tree\",\n    \"searchable\": true,\n    \"pickerSize\": \"md\",\n    \"options\": [\n      {\n        \"label\": \"成员\",\n        \"selectMode\": \"tree\",\n        \"children\": [\n          {\n            \"label\": \"法师\",\n            \"children\": [\n              {\n                \"label\": \"诸葛亮\",\n                \"value\": \"zhugeliang\"\n              }\n            ]\n          },\n          {\n            \"label\": \"战士\",\n            \"children\": [\n              {\n                \"label\": \"曹操\",\n                \"value\": \"caocao\"\n              },\n              {\n                \"label\": \"钟无艳\",\n                \"value\": \"zhongwuyan\"\n              }\n            ]\n          },\n          {\n            \"label\": \"打野\",\n            \"children\": [\n              {\n                \"label\": \"李白\",\n                \"value\": \"libai\"\n              },\n              {\n                \"label\": \"韩信\",\n                \"value\": \"hanxin\"\n              },\n              {\n                \"label\": \"云中君\",\n                \"value\": \"yunzhongjun\"\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"label\": \"用户\",\n        \"selectMode\": \"chained\",\n        \"children\": [\n          {\n            \"label\": \"法师\",\n            \"children\": [\n              {\n                \"label\": \"诸葛亮\",\n                \"value\": \"zhugeliang\"\n              }\n            ]\n          },\n          {\n            \"label\": \"战士\",\n            \"children\": [\n              {\n                \"label\": \"曹操\",\n                \"value\": \"caocao\"\n              },\n              {\n                \"label\": \"钟无艳\",\n                \"value\": \"zhongwuyan\"\n              }\n            ]\n          },\n          {\n            \"label\": \"打野\",\n            \"children\": [\n              {\n                \"label\": \"李白\",\n                \"value\": \"libai\"\n              },\n              {\n                \"label\": \"韩信\",\n                \"value\": \"hanxin\"\n              },\n              {\n                \"label\": \"云中君\",\n                \"value\": \"yunzhongjun\"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>更多配置请参考<a href=\"./tabs-transfer\">TabsTransfer 组合穿梭器</a>。</p>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
