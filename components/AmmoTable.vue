<template>
  <div class="ammo-table">
    <div v-if="!data" class="ammo__error">
      <h1>Network error =(</h1>
    </div>

    <template v-else>
      <div class="caliber-select">
        <span
          class="caliber-select_top"
          style="display: block; position: absolute; top: 40px"
        >
          <button class="caliber clickable" @click="isHandleClick($event)">
            Show all calibers
          </button>
        </span>
        <span v-for="(items, index) in calibers" :key="index">
          <button
            :name="items.gsx$caliber.$t"
            class="caliber clickable"
            @click="isHandleClick($event)"
          >
            {{ items.gsx$caliber.$t }}
          </button>
        </span>
      </div>

      <div class="adjoined-tables">
        <div class="table-wrap">
          <sorted-table
            :values="newApi"
            :sort="list_caliber"
            class="main-table tablesorter"
          >
            <thead>
              <tr>
                <th rowspan="2" scope="col" class="tal">Name</th>
                <th class="clickable tar" rowspan="2" scope="col">
                  <sort-link name="caliber">Caliber</sort-link>
                </th>
                <th class="tilted clickable" rowspan="2" scope="col">
                  <span>
                    <span><sort-link name="dmg">Damage</sort-link></span>
                  </span>
                </th>
                <th class="tilted clickable" rowspan="2" scope="col">
                  <span>
                    <span
                      ><sort-link name="projectile">Projectile</sort-link></span
                    >
                  </span>
                </th>
                <th class="tilted clickable" rowspan="2" scope="col">
                  <span>
                    <span
                      ><sort-link name="gsx$armpentra.$t"
                        >Penetration</sort-link
                      ></span
                    >
                  </span>
                </th>
                <th class="tilted clickable" rowspan="2" scope="col">
                  <span>
                    <span
                      ><sort-link name="armdamage"
                        >Armor Damage</sort-link
                      ></span
                    >
                  </span>
                </th>
                <th class="tilted clickable" rowspan="2" scope="col">
                  <span>
                    <span
                      ><sort-link name="bulletfrag"
                        >Framentation Chance</sort-link
                      ></span
                    >
                  </span>
                </th>
                <th class="tilted clickable" rowspan="2" scope="col">
                  <span>
                    <span><sort-link name="speed">Speed (m/s)</sort-link></span>
                  </span>
                </th>
                <th class="tilted clickable" rowspan="2" scope="col">
                  <span>
                    <span
                      ><sort-link name="ricochet"
                        >Ricochet Chance</sort-link
                      ></span
                    >
                  </span>
                </th>
                <th colspan="6">Well Placed Shots to Kill</th>
              </tr>
              <tr class="compare">
                <th class="clickable">
                  <sort-link name="noarmor">No armor</sort-link>
                </th>
                <th class="clickable">
                  <sort-link name="paca">PACA</sort-link>
                </th>
                <th class="clickable">
                  <sort-link name="usectrooper">Trooper</sort-link>
                </th>
                <th class="clickable">
                  <sort-link name="gzhel">Gzhel</sort-link>
                </th>
                <th class="clickable">
                  <sort-link name="zhuk6a">Zhuk6a</sort-link>
                </th>
                <th class="clickable">
                  <sort-link name="b43fort">6B43</sort-link>
                </th>
              </tr>
            </thead>
            <tbody slot="body" slot-scope="sort" class="tbody">
              <template v-for="value in sort.values">
                <template v-if="caliber === '' || value.caliber == caliber">
                  <tr :key="value.id" :class="value.caliber">
                    <td class="left" data-label="Name">
                      <span>{{ value.name }}</span>
                    </td>
                    <td data-label="Caliber">
                      <span>{{ value.caliber }}</span>
                    </td>
                    <td data-label="Damage">
                      <span>
                        <span class="val">{{ value.dmg }}</span>
                      </span>
                    </td>
                    <td data-label="Projectile">
                      <span>
                        <span class="val">{{ value.projectile }}</span>
                      </span>
                    </td>
                    <td data-label="Penetration">
                      <span>
                        <span class="val">{{ value.armpenetra }}</span>
                      </span>
                    </td>
                    <td data-label="Armor Damage">
                      <span>
                        <span class="val">{{ value.armdamage }}%</span>
                      </span>
                    </td>
                    <td data-label="Framentation Chance">
                      <span>
                        <span class="val">{{ value.bulletfrag }}%</span>
                      </span>
                    </td>
                    <td data-label="Speed (m/s)">
                      <span>
                        <span class="val">{{ value.speed }}</span>
                      </span>
                    </td>
                    <td data-label="Ricochet Chance">
                      <span>
                        <span class="val">{{ value.ricochet }}%</span>
                      </span>
                    </td>
                    <td data-label="No armor">
                      <span class="val">{{ value.noarmor }}</span>
                    </td>
                    <td data-label="PACA">
                      <span class="val">{{ value.paca }}</span>
                    </td>
                    <td data-label="USEC Trooper">
                      <span class="val">{{ value.usectrooper }}</span>
                    </td>
                    <td data-label="Gzhel">
                      <span class="val">{{ value.gzhel }}</span>
                    </td>
                    <td data-label="Zhuk 6a">
                      <span class="val">{{ value.zhuk6a }}</span>
                    </td>
                    <td data-label="6B43 'Fort'">
                      <span class="val">{{ value.b43fort }}</span>
                    </td>
                  </tr>
                </template>
              </template>
            </tbody>
          </sorted-table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Vue from 'vue'
import VueLodash from 'vue-lodash'
import _ from 'lodash'
import SortedTablePlugin from 'vue-sorted-table'
// import Preloader from "~/components/Preloader";

Vue.use(SortedTablePlugin, VueLodash)

export default {
  name: 'AmmoTable',
  components: {},
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      caliber: '',
      list_caliber: 'gsx$caliber.$t',
    }
  },
  computed: {
    calibers() {
      const arr = _.cloneDeep(this.data)
      const sortedArr = arr.sort(function (a, b) {
        return a.gsx$caliber.$t - b.gsx$caliber.$t
      })
      const results = []
      const idsSeen = {}
      const idSeenValue = {}
      for (let i = 0, len = sortedArr.length, id; i < len; ++i) {
        id = sortedArr[i].gsx$caliber.$t
        if (idsSeen[id] !== idSeenValue) {
          results.push(sortedArr[i])
          idsSeen[id] = idSeenValue
        }
      }
      return results
    },
    newApi() {
      const newApi = this.data.map(function (item) {
        return {
          id: item.gsx$id.$t,
          name: item.gsx$name.$t,
          caliber: item.gsx$caliber.$t,
          dmg: Number(item.gsx$dmg.$t),
          projectile: Number(item.gsx$projectile.$t),
          armpenetra: Number(item.gsx$armpenetra.$t),
          armdamage: Number(item.gsx$armdamage.$t),
          bulletfrag: Number(item.gsx$bulletfrag.$t),
          speed: Number(item.gsx$speed.$t),
          ricochet: Number(item.gsx$ricochet.$t),
          recoil: Number(item.gsx$recoil.$t),
          accuracy: Number(item.gsx$accuracy.$t),
          noarmor: item.gsx$noarmor.$t,
          paca: item.gsx$paca.$t,
          usectrooper: item.gsx$usectrooper.$t,
          gzhel: item.gsx$gzhel.$t,
          zhuk6a: item.gsx$zhuk6a.$t,
          b43fort: item.gsx$b43fort.$t,
        }
      })
      return newApi
    },
  },
  methods: {
    isHandleClick(e) {
      if (this.caliber === e.target.name) {
        this.caliber = ''
      } else {
        this.caliber = e.target.name
      }
    },
  },
}
</script>
