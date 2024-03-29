window.config = {
  routerBasename: "/",
  extensions: [],
  modes: [],
  showStudyList: !0,
  omitQuotationForMultipartRequest: !0,
  showWarningMessageForCrossOrigin: !0,
  showCPUFallbackMessage: !0,
  showLoadingIndicator: !0,
  strictZSpacingForVolumeViewport: !0,
  dataSources: [{
      friendlyName: "dcmjs DICOMWeb Server",
      namespace: "@ohif/extension-default.dataSourcesModule.dicomweb",
      sourceName: "dicomweb",
      configuration: {
          name: "aws",
          wadoUriRoot: "https://domvja9iplmyu.cloudfront.net/dicomweb",
          qidoRoot: "https://domvja9iplmyu.cloudfront.net/dicomweb",
          wadoRoot: "https://domvja9iplmyu.cloudfront.net/dicomweb",
          qidoSupportsIncludeField: !1,
          supportsReject: !1,
          imageRendering: "wadors",
          thumbnailRendering: "wadors",
          enableStudyLazyLoad: !0,
          supportsFuzzyMatching: !1,
          supportsWildcard: !0,
          staticWado: !0,
          singlepart: "bulkdata,video,pdf"
      }
  }, {
      friendlyName: "dicom json",
      namespace: "@ohif/extension-default.dataSourcesModule.dicomjson",
      sourceName: "dicomjson",
      configuration: {
          name: "json"
      }
  }, {
      friendlyName: "dicom local",
      namespace: "@ohif/extension-default.dataSourcesModule.dicomlocal",
      sourceName: "dicomlocal",
      configuration: {}
  }],
  httpErrorHandler: e=>{
      console.warn(e.status),
      console.warn("test, navigate to https://ohif.org/")
  }
  ,
  defaultDataSourceName: "dicomweb",
  hotkeys: [{
      commandName: "incrementActiveViewport",
      label: "Next Viewport",
      keys: ["right"]
  }, {
      commandName: "decrementActiveViewport",
      label: "Previous Viewport",
      keys: ["left"]
  }, {
      commandName: "rotateViewportCW",
      label: "Rotate Right",
      keys: ["r"]
  }, {
      commandName: "rotateViewportCCW",
      label: "Rotate Left",
      keys: ["l"]
  }, {
      commandName: "invertViewport",
      label: "Invert",
      keys: ["i"]
  }, {
      commandName: "flipViewportHorizontal",
      label: "Flip Horizontally",
      keys: ["h"]
  }, {
      commandName: "flipViewportVertical",
      label: "Flip Vertically",
      keys: ["v"]
  }, {
      commandName: "scaleUpViewport",
      label: "Zoom In",
      keys: ["+"]
  }, {
      commandName: "scaleDownViewport",
      label: "Zoom Out",
      keys: ["-"]
  }, {
      commandName: "fitViewportToWindow",
      label: "Zoom to Fit",
      keys: ["="]
  }, {
      commandName: "resetViewport",
      label: "Reset",
      keys: ["space"]
  }, {
      commandName: "nextImage",
      label: "Next Image",
      keys: ["down"]
  }, {
      commandName: "previousImage",
      label: "Previous Image",
      keys: ["up"]
  }, {
      commandName: "setZoomTool",
      label: "Zoom",
      keys: ["z"]
  }, {
      commandName: "windowLevelPreset1",
      label: "W/L Preset 1",
      keys: ["1"]
  }, {
      commandName: "windowLevelPreset2",
      label: "W/L Preset 2",
      keys: ["2"]
  }, {
      commandName: "windowLevelPreset3",
      label: "W/L Preset 3",
      keys: ["3"]
  }, {
      commandName: "windowLevelPreset4",
      label: "W/L Preset 4",
      keys: ["4"]
  }, {
      commandName: "windowLevelPreset5",
      label: "W/L Preset 5",
      keys: ["5"]
  }, {
      commandName: "windowLevelPreset6",
      label: "W/L Preset 6",
      keys: ["6"]
  }, {
      commandName: "windowLevelPreset7",
      label: "W/L Preset 7",
      keys: ["7"]
  }, {
      commandName: "windowLevelPreset8",
      label: "W/L Preset 8",
      keys: ["8"]
  }, {
      commandName: "windowLevelPreset9",
      label: "W/L Preset 9",
      keys: ["9"]
  }]
};
