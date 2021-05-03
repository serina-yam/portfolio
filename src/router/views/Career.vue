<template>
  <div id="career">
    <h1>Career</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="content" class="content content-full-width">
            <!-- begin career-content -->
            <div class="career-content">
              <!-- begin tab-content -->
              <div class="tab-content p-0">
                <!-- begin #career-post tab -->
                <div class="tab-pane fade active show" id="career-post">
                  <!-- begin timeline -->
                  <ul class="timeline">
                    <li>
                      <!-- begin timeline-time -->
                      <div class="timeline-time">
                        <span class="date">2021</span>
                        <span class="time">4月〜</span>
                      </div>
                      <!-- end timeline-time -->
                      <!-- begin timeline-icon -->
                      <div class="timeline-icon">
                        <a href="javascript:;">&nbsp;</a>
                      </div>
                      <!-- end timeline-icon -->
                      <!-- begin timeline-body -->
                      <div class="timeline-body">
                        <div class="timeline-header">
                          <span class="username"
                            ><a>sigma international</a> <small></small
                          ></span>
                          <span class="pull-right text-muted">current</span>
                        </div>
                        <div class="timeline-content">
                          <p>
                            契約書管理システムに参画しています。
                          </p>
                        </div>

                        <div class="timeline-footer">
                          <a class="m-r-15 text-inverse-lighter"
                            ><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>
                            html & css</a
                          >
                          <a class="m-r-15 text-inverse-lighter"
                            ><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> js
                            / jQuery</a
                          >
                          <a class="m-r-15 text-inverse-lighter"
                            ><i class="fa fa-share fa-fw fa-lg m-r-3"></i> java
                            / spring</a
                          >
                        </div>
                      </div>
                      <!-- end timeline-body -->
                    </li>
                    <li>
                      <!-- begin timeline-time -->
                      <div class="timeline-time">
                        <span class="date">2021</span>
                        <span class="time">4月〜</span>
                      </div>
                      <!-- end timeline-time -->
                      <!-- begin timeline-icon -->
                      <div class="timeline-icon">
                        <a href="javascript:;">&nbsp;</a>
                      </div>
                      <!-- end timeline-icon -->
                      <!-- begin timeline-body -->
                      <div class="timeline-body">
                        <div class="timeline-header">
                          <span class="username"
                            ><a>sigma international</a> <small></small
                          ></span>
                          <span class="pull-right text-muted">current</span>
                        </div>
                        <div class="timeline-content">
                          <p>
                            契約書管理システムに参画しています。
                          </p>
                        </div>

                        <div class="timeline-footer">
                          <a class="m-r-15 text-inverse-lighter"
                            ><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>
                            html & css</a
                          >
                          <a class="m-r-15 text-inverse-lighter"
                            ><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> js
                            / jQuery</a
                          >
                          <a class="m-r-15 text-inverse-lighter"
                            ><i class="fa fa-share fa-fw fa-lg m-r-3"></i> java
                            / spring</a
                          >
                        </div>
                      </div>
                      <!-- end timeline-body -->
                    </li>
                    <li>
                      <!-- begin timeline-time -->
                      <div class="timeline-time">
                        <span class="date">2021</span>
                        <span class="time">4月〜</span>
                      </div>
                      <!-- end timeline-time -->
                      <!-- begin timeline-icon -->
                      <div class="timeline-icon">
                        <a href="javascript:;">&nbsp;</a>
                      </div>
                      <!-- end timeline-icon -->
                      <!-- begin timeline-body -->
                      <div class="timeline-body">
                        <div class="timeline-header">
                          <span class="username"
                            ><a>sigma international</a> <small></small
                          ></span>
                          <span class="pull-right text-muted">current</span>
                        </div>
                        <div class="timeline-content">
                          <p>
                            契約書管理システムに参画しています。
                          </p>
                        </div>

                        <div class="timeline-footer">
                          <a class="m-r-15 text-inverse-lighter"
                            ><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>
                            html & css</a
                          >
                          <a class="m-r-15 text-inverse-lighter"
                            ><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> js
                            / jQuery</a
                          >
                          <a class="m-r-15 text-inverse-lighter"
                            ><i class="fa fa-share fa-fw fa-lg m-r-3"></i> java
                            / spring</a
                          >
                        </div>
                      </div>
                      <!-- end timeline-body -->
                    </li>
                    <li>
                      <!-- begin timeline-icon -->
                      <div class="timeline-icon">
                        <a href="javascript:;">&nbsp;</a>
                      </div>
                      <!-- end timeline-icon -->
                      <!-- begin timeline-body -->
                      <div class="timeline-body">
                        Loading...
                      </div>
                      <!-- begin timeline-body -->
                    </li>
                  </ul>
                  <!-- end timeline -->
                </div>
                <!-- end #career-post tab -->
              </div>
              <!-- end tab-content -->
            </div>
            <!-- end career-content -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #career {
    display: flex;
    flex-direction: column;
    align-items: center;
    background:#cddeeb;
  }

  h1 {
    margin: 50px 0;
  }

  .career-content {
      padding: 25px;
      border-radius: 4px
  }

  .career-content:after,
  .career-content:before {
      content: '';
      display: table;
      clear: both
  }

  .career-content .tab-content,
  .career-content .tab-pane {
      background: 0 0
  }

  .timeline {
      list-style-type: none;
      margin: 0;
      padding: 0;
      position: relative
  }

  .timeline:before {
      content: '';
      position: absolute;
      top: 5px;
      bottom: 5px;
      width: 5px;
      background: #2d353c;
      left: 20%;
      margin-left: -2.5px
  }

  .timeline>li {
      position: relative;
      min-height: 50px;
      padding: 20px 0
  }

  .timeline .timeline-time {
      position: absolute;
      left: 0;
      width: 18%;
      text-align: right;
      top: 30px
  }

  .timeline .timeline-time .date,
  .timeline .timeline-time .time {
      display: block;
      font-weight: 600
  }

  .timeline .timeline-time .date {
      line-height: 16px;
      font-size: 12px
  }

  .timeline .timeline-time .time {
      line-height: 24px;
      font-size: 20px;
      color: #242a30
  }

  .timeline .timeline-icon {
      left: 15%;
      position: absolute;
      width: 10%;
      text-align: center;
      top: 40px
  }

  .timeline .timeline-icon a {
      text-decoration: none;
      width: 20px;
      height: 20px;
      display: inline-block;
      border-radius: 20px;
      background: #82C7F2;
      line-height: 10px;
      color: #fff;
      font-size: 14px;
      border: 5px solid #82C7F2;
      transition: border-color .2s linear
  }

  .timeline .timeline-body {
      margin-left: 23%;
      margin-right: 17%;
      background: #fff;
      position: relative;
      padding: 20px 25px;
      border-radius: 6px
  }

  .timeline .timeline-body:before {
      content: '';
      display: block;
      position: absolute;
      border: 10px solid transparent;
      border-right-color: #fff;
      left: -20px;
      top: 20px
  }

  .timeline .timeline-body>div+div {
      margin-top: 15px
  }

  .timeline .timeline-body>div+div:last-child {
      margin-bottom: -20px;
      padding-bottom: 20px;
      border-radius: 0 0 6px 6px
  }

  .timeline-header {
      padding-bottom: 10px;
      border-bottom: 1px solid #e2e7eb;
      line-height: 30px
  }

  .timeline-header .userimage {
      float: left;
      width: 34px;
      height: 34px;
      border-radius: 40px;
      overflow: hidden;
      margin: -2px 10px -2px 0
  }

  .timeline-header .username {
      font-size: 16px;
      font-weight: 600
  }

  .timeline-header .username,
  .timeline-header .username a {
      color: #2d353c
  }

  .timeline img {
      max-width: 100%;
      display: block
  }

  .timeline-content {
      letter-spacing: .25px;
      line-height: 18px;
      font-size: 13px
  }

  .pull-right {
    float: right;
  }

  .timeline-content:after,
  .timeline-content:before {
      content: '';
      display: table;
      clear: both
  }

  .timeline-footer {
      background: #3984B2;
      margin-left: -25px;
      margin-right: -25px;
      padding: 20px 25px;
  }

  .timeline-footer a {
      color: #fff
  }
</style>


