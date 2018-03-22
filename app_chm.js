var {Table,Modal,Navbar,Nav,NavItem,DropdownButton,MenuItem}=ReactBootstrap;
var update=newContext();
var DateTime=Datetime;
var host="";
var isEqual=_.isEqual;// from 'lodash/isEqual';
var find=_.find;// import find from 'lodash/find';
class LI extends React.Component {
  render=()=>{
    return <div>LI</div>;
  }
}
class UL extends React.Component {
  render=()=>{
    if (this.props.children){
      var childs=this.props.children.map((c,idx)=>{
        return c;
      })
      return <div>UL{childs}</div>;
    }
    else{
      return <div>UL</div>;
    }
  }
}
class LI_OBJECT extends React.Component {
  open=()=>{
    console.log(this.para);
    console.log(this.para.Local);
  }
  render=()=>{
    this.para={}
    if (this.props.children){
      for(var i in this.props.children){
          var c=this.props.children[i] ;
          this.para[c.props.name]=c.props.value
      }
    }
    else{
      console.log("no child");
    }
    return <div><a onClick={this.open}>{this.para.Name}</a></div>;
  }
}
class OBJECT extends React.Component {
  render=()=>{
    var para={}
    if (this.props.children){
      for(var i in this.props.children){
          var c=this.props.children[i] ;
          para[c.props.name]=c.props.value
      }
    }
    else{
      console.log("no child");
    }
    console.log(para);
    if (this.props.children){
      var childs=this.props.children.map((c,idx)=>{
        return c;
      })
      if(this.inUL){
        console.log("inUL");
      }
      return <div>{para.Name}{childs}</div>;
    }
    else{
      return <div>OBJECT</div>;
    }
  }
}
class App extends React.Component {
   state = {
  }
  componentDidMount=() => {
  }
  load_data=()=>{
  };
  render=()=>{
    console.log("render=========================");
    return (
    <div id="todoapp" className="table-responsive">
<OBJECT type="text/site properties">
<param name="FrameName" value="right" />
<param name="ImageType" value="Folder" />
<param name="Window Styles" value="0x627" />
<param name="Foreground" value="0x80000008" />
<param name="Background" value="0xFFFFFF" />
<param name="Font" value="MS Sans Serif,9,0" />
</OBJECT><UL>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="软件帮助说明" />
<param name="Local" value="" />
<param name="ImageNumber" value="1" />
</LI_OBJECT>
<UL>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="计算机最低系统配置要求" />
<param name="Local" value="SystemConfig.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="安装" />
<param name="Local" value="setup.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="注册" />
<param name="Local" value="Register.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
</UL>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="主界面" />
<param name="Local" value="" />
<param name="ImageNumber" value="1" />
</LI_OBJECT>
<UL>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="工具栏" />
<param name="Local" value="ToolBar.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="状态" />
<param name="Local" value="Status.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="仪器状态" />
<param name="Local" value="InstrunmentStatus.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="分析" />
<param name="Local" value="Analysis.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="释放曲线" />
<param name="Local" value="ReleaseCurve.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="通道" />
<param name="Local" value="Channel.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="基线" />
<param name="Local" value="BaseLine.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="结果" />
<param name="Local" value="Results.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
</UL>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="窗口" />
<param name="Local" value="" />
<param name="ImageNumber" value="1" />
</LI_OBJECT>
<UL>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="文件-导出" />
<param name="Local" value="File-Export.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="文件-退出" />
<param name="Local" value="File-Exit.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="编辑-全选" />
<param name="Local" value="Edit-SelectAll.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="编辑-删除选定" />
<param name="Local" value="Edit-DeleteSelected.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="编辑-打印报告" />
<param name="Local" value="Edit-Print.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="编辑-比较曲线" />
<param name="Local" value="Edit-comparecurve.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="编辑-编辑曲线" />
<param name="Local" value="edit-editcurve.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="校正-单点校正" />
<param name="Local" value="Calibration-Single.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="校正-基础校正" />
<param name="Local" value="Calibration-Base.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="校正-线性化" />
<param name="Local" value="Calibration-Linearity.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="校正-重新计算" />
<param name="Local" value="Calibration-Recal.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="设备-天平" />
<param name="Local" value="Device-Balance.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="设备-维护提醒" />
<param name="Local" value="Device-Maintain.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="设备-调试设备" />
<param name="Local" value="Device-Debug.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="设备操作" />
<param name="Local" value="DeviceOperation.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="用户-结果" />
<param name="Local" value="Users-Results.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="用户-存储质量" />
<param name="Local" value="Users-Loader.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="用户-用户管理" />
<param name="Local" value="Users-Manager.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="用户-统计信息" />
<param name="Local" value="Users-Statistics.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="帮助" />
<param name="Local" value="Help.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="传输" />
<param name="Local" value="Transport.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="登录" />
<param name="Local" value="Login.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="查询" />
<param name="Local" value="Query.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="方法" />
<param name="Local" value="Method.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
</UL>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="原理" />
<param name="Local" value="Theory-Baseline.mht" />
<param name="ImageNumber" value="1" />
</LI_OBJECT>
<UL>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="原理-基线" />
<param name="Local" value="../../CSONH说明书/CS3000软件说明书/3000CH-S/原理-基线.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="原理-应用" />
<param name="Local" value="Theory-Application.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="原理-结果" />
<param name="Local" value="Theory-Results.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="原理-控制器" />
<param name="Local" value="Theory-Controller.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="原理-校正" />
<param name="Local" value="Theory-calibration.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="原理-比较电平" />
<param name="Local" value="Theory-Comparator.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="原理-登陆" />
<param name="Local" value="Theory-Login.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="原理-空白值" />
<param name="Local" value="Theory-Blankvalue.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="原理-线性化" />
<param name="Local" value="Theory-Linearity.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
<LI_OBJECT type="text/sitemap">
<param name="Name" value="原理-脱机" />
<param name="Local" value="Theory-Offline.mht" />
<param name="ImageNumber" value="11" />
</LI_OBJECT>
</UL></UL>
  </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
